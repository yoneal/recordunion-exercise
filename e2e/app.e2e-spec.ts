import { SupportPage } from './app.po';

describe('support App', () => {
  let page: SupportPage;

  beforeEach(() => {
    page = new SupportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
