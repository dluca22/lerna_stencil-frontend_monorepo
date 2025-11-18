import { newE2EPage } from '@stencil/core/testing';

describe('another-one', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<another-one></another-one>');

    const element = await page.find('another-one');
    expect(element).toHaveClass('hydrated');
  });
});
