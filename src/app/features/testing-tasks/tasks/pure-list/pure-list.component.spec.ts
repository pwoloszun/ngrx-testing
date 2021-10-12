import { render, screen } from '@testing-library/angular';
import { merge } from 'lodash';

import { PureListComponent } from './pure-list.component';

describe('PureListComponent', () => {

  xit('should render list item for each input item', () => {

    expect(true).toEqual(false);
  });
});

const template = `
<nts-pure-list [items]="items">
  <ng-template let-hero
               let-i="index">
    <h3 matLine>Hero: {{hero.name}}</h3>
    <p matLine>
      <small>{{i + 1}} Price: {{hero.secretIdentity}}</small>
    </p>
  </ng-template>
</nts-pure-list>
`;

type Props = Partial<PureListComponent<any>>;

// async function renderPureList(componentProperties: Props) {
//   return render(PureListComponent, {
//     componentProperties,
//     template,
//     imports: [SharedModule],
//   });
// }

// const items = [
//   { id: 100, secretIdentity: 'Peter Parker', name: 'Spider-Man' },
//   { id: 200, secretIdentity: 'Bruce', name: 'Batman' },
//   { id: 300, secretIdentity: 'Clark', name: 'Superman' },
// ];
