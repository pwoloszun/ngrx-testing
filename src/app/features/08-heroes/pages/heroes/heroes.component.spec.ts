import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

import * as faker from 'faker';
import { render, screen } from '@testing-library/angular';

import { SharedModule } from '@shared/shared.module';
import { HeroesService } from '@api/hero.service';
import { Hero } from '@api/models/hero.model';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {

  xit('should render heroes provided by heroe service', async () => {
    expect(false).toEqual(true);
  });

});

async function renderHeroesComponent() {
  //TODO
}
