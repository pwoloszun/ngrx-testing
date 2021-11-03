import { Component, OnInit } from '@angular/core';
import { NbaIndividualStats } from '@app/core/api/nba/nba-individual-stats-api.service';
import { NbaInfoService } from '../../services/nba-info.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'nts-player-stats',
  templateUrl: './player-stats.component.html',
})
export class PlayerStatsComponent implements OnInit {

  playerStats$!: Observable<NbaIndividualStats>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private nbaInfo: NbaInfoService,
  ) { }

  ngOnInit(): void {
    // TODO: get player 'id' from route params

    // TODO
    // this.playerStats$ = this.nbaInfo.getSinglePlayerStats$(playerId);
  }

}
