import { FormsNgonePage } from './app.po';

describe('forms-ngone App', () => {
  let page: FormsNgonePage;

  beforeEach(() => {
    page = new FormsNgonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
