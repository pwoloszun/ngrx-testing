import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { NbaTeam } from '@app/core/api/nba/nba-teams-api.service';

import { NbaInfoService } from '../../services/nba-info.service';

@Component({
  selector: 'nts-team-details',
  templateUrl: './team-details.component.html',
})
export class TeamDetailsComponent implements OnInit {

  team$!: Observable<NbaTeam>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private nbaInfo: NbaInfoService,
  ) { }

  ngOnInit(): void {
    const abbr = this.activatedRoute.parent?.snapshot.paramMap.get('abbr');
    if (!abbr) {
      throw new Error(`Missing abbr`);
    }
    this.team$ = this.nbaInfo.getTeamByAbbr$(abbr);
  }

}
