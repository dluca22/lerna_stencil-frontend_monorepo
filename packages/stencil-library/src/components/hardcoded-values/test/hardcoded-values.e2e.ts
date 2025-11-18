import { newE2EPage } from '@stencil/core/testing';

describe('hardcoded-values', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hardcoded-values></hardcoded-values>');

    const element = await page.find('hardcoded-values');
    expect(element).toHaveClass('hydrated');
  });
});
