import { FullPage } from './app.po';

describe('full App', function() {
  let page: FullPage;

  beforeEach(() => {
    page = new FullPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
