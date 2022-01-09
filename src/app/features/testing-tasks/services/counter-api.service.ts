import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

const DELAY_IN_MS = 1200;

export interface CounterDto {
  id: number;
  value: number;
}

export type CounterDtoParams = Omit<Partial<CounterDto>, 'id'>;

@Injectable({
  providedIn: 'root'
})
export class CounterApiService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<CounterDto> {
    return this.http.get<CounterDto>(`/api/counter-values/${id}`)
      .pipe(
        delay(DELAY_IN_MS)
      );
  }

  update(id: number, params: CounterDtoParams): Observable<CounterDto> {
    return this.http.put<CounterDto>(`/api/counter-values/${id}`, params)
      .pipe(
        delay(DELAY_IN_MS)
      );
  }
}
