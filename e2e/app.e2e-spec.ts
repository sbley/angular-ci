import { AngularCiPage } from './app.po';

describe('angular-ci App', () => {
  let page: AngularCiPage;

  beforeEach(() => {
    page = new AngularCiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
