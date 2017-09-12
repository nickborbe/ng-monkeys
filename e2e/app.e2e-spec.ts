import { MonkeyCityPage } from './app.po';

describe('monkey-city App', () => {
  let page: MonkeyCityPage;

  beforeEach(() => {
    page = new MonkeyCityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
