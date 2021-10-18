import { visitSmartComponentsPage } from './helpers';

describe('smart-quick-search.component', () => {

  before(() => {
    visitSmartComponentsPage();
  });

  it('should perform quick search', () => {
    const playersFixturePath = 'testing-tasks/02-smart-cmp-page/players.json';
    expect(true).to.deep.eq(false);
  });

});
