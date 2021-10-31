import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NbaTeam } from '@app/core/api/nba/nba-teams-api.service';

import { NbaInfoService } from '../../services/nba-info.service';

@Component({
  selector: 'nts-team-list',
  templateUrl: './team-list.component.html',
})
export class TeamListComponent implements OnInit {

  teams$!: Observable<NbaTeam[]>;


  constructor(
    private nbaInfo: NbaInfoService,
  ) { }

  ngOnInit(): void {
    this.teams$ = this.nbaInfo.getAllTeams$();
  }

}
