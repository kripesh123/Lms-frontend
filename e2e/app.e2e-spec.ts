import { TexasSystemPage } from './app.po';

describe('texas-system App', () => {
  let page: TexasSystemPage;

  beforeEach(() => {
    page = new TexasSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
