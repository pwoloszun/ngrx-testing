import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NbaPlayer } from '@api/nba/nba-players-api.service';

import { NbaInfoService } from '../../services/nba-info.service';

@Component({
  selector: 'nts-player-list',
  templateUrl: './player-list.component.html',
})
export class PlayerListComponent implements OnInit {

  players$!: Observable<NbaPlayer[]>;

  constructor(
    private nbaInfo: NbaInfoService,
  ) { }

  ngOnInit(): void {
    this.players$ = this.nbaInfo.getAllPlayers$();
  }

}
