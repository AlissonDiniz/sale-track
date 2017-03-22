import { SaleTrackPage } from './app.po';

describe('sale-track App', function() {
  let page: SaleTrackPage;

  beforeEach(() => {
    page = new SaleTrackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
