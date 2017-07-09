import { MyAngularReviewPage } from './app.po';

describe('my-angular-review App', () => {
  let page: MyAngularReviewPage;

  beforeEach(() => {
    page = new MyAngularReviewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
