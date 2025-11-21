import { newE2EPage } from '@stencil/core/testing';

describe('text-snippet-expand', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-snippet-expand></text-snippet-expand>');

    const element = await page.find('text-snippet-expand');
    expect(element).toHaveClass('hydrated');
  });
});
