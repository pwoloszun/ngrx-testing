import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { filter, map, tap, switchMap } from 'rxjs/operators';

const GITHUB_URL = 'https://api.github.com/search/repositories';
const SEARCH_QUERY_MIN_LENGTH = 3;

export enum RepositoryType {
  USER = 'USER',
  ORGANIZATION = 'ORGANIZATION'
}

export interface RepoOwner {
  type: string;
  login: string;
  avatar_url: string;
  repos_url: string;
  [k: string]: any;
}

export interface RepoItem {
  owner: RepoOwner;
  [k: string]: any;
}

interface RepoSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: RepoItem[];
}

const EMPTY_REPOS = of([]) as Observable<RepoItem[]>;

@Injectable({
  providedIn: 'root'
})
export class SearchReposFacadeService {
  private selectedRepo$ = new BehaviorSubject<RepoItem | null>(null);

  isLoading$ = new BehaviorSubject(false);

  selectedOwner$ = this.selectedRepo$.pipe(
    map((repo) => repo ? repo.owner : null)
  );

  ownerAllRepos$ = this.selectedOwner$.pipe(
    tap(() => this.isLoading$.next(true)),
    switchMap((owner: RepoOwner | null) => {
      if (owner) {
        return this.fetchReposByOwner(owner);
      } else {
        return EMPTY_REPOS;
      }
    }),
    tap(() => this.isLoading$.next(false)),
    tap((d) => console.log('all', d)),
  );

  constructor(private http: HttpClient) { }

  searchRepos(query: string, type: RepositoryType): Observable<RepoItem[]> {
    const params = { q: query };
    return this.http.get<RepoSearchResult>(GITHUB_URL, { params }).pipe(
      map((res: RepoSearchResult) => res.items),
      map((items) => items.filter((item) => item.owner.type.toUpperCase() === type)),
    );
  }

  selectRepo(repo: RepoItem) {
    this.selectedRepo$.next(repo);
  }

  fetchReposByOwner(owner: RepoOwner): Observable<RepoItem[]> {
    return this.http.get<RepoItem[]>(owner.repos_url);
  }
}
