import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

import * as faker from 'faker';
import { render, screen } from '@testing-library/angular';

import { SharedModule } from '@shared/shared.module';
import { HeroesService } from '@api/hero.service';
import { Hero } from '@api/models/hero.model';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {

  it('should render heroes provided by heroe service', async () => {
    const heroes = generateHeroesData();
    await renderHeroesComponent(heroes);

    const heroRows = getAllHeroesRows();

    heroes.forEach((hero, i) => {
      const row = heroRows[i];
      expect(row.textContent).toContain(hero.name);
      expect(row.textContent).toContain(hero.secretIdentity);
    });
  });

});

function generateHeroesData(count = 5): Hero[] {
  const results: Hero[] = [];
  for (let index = 0; index < count; index++) {
    results.push({
      id: 1,
      name: faker.lorem.words(3),
      secretIdentity: faker.name.lastName(),
      universe: faker.lorem.sentence(),
    });
  }
  return results;
}

function createHeroesServiceStub(getAllResults: Hero[]) {
  return {
    getAll(): Observable<Hero[]> {
      return of(getAllResults);

    },
  };
}

async function renderHeroesComponent(getAllResults: Hero[]) {
  const heroServiceStub = createHeroesServiceStub(getAllResults);
  return render(HeroesComponent, {
    imports: [
      CommonModule,
      SharedModule,
    ],
    providers: [
      { provide: HeroesService, useValue: heroServiceStub },
    ]
  });
}

function getAllHeroesRows() {
  return screen.getAllByRole('row', { hidden: true }).slice(1);
}
