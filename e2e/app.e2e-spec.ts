import { MyResumePage } from './app.po';

describe('my-resume App', () => {
  let page: MyResumePage;

  beforeEach(() => {
    page = new MyResumePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
