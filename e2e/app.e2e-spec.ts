import { ScouterFrontPage } from './app.po';

describe('scouter-front App', () => {
  let page: ScouterFrontPage;

  beforeEach(() => {
    page = new ScouterFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
