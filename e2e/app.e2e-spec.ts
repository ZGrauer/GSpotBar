import { GSpotBarPage } from './app.po';

describe('g-spot-bar App', function() {
  let page: GSpotBarPage;

  beforeEach(() => {
    page = new GSpotBarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
