import { MYTODOPage } from './app.po';

describe('my-todo App', () => {
  let page: MYTODOPage;

  beforeEach(() => {
    page = new MYTODOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
