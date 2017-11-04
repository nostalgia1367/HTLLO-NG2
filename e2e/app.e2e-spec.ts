import { HtlloNg2Page } from './app.po';

describe('htllo-ng2 App', function() {
  let page: HtlloNg2Page;

  beforeEach(() => {
    page = new HtlloNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
