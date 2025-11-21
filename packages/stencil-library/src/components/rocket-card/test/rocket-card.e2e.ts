import { newE2EPage } from '@stencil/core/testing';

describe('rocket-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rocket-card></rocket-card>');

    const element = await page.find('rocket-card');
    expect(element).toHaveClass('hydrated');
  });
});
