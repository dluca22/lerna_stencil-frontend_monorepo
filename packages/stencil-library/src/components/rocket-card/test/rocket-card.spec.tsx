import { newSpecPage } from '@stencil/core/testing';
import { RocketCard } from '../rocket-card';

describe('rocket-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RocketCard],
      html: `<rocket-card></rocket-card>`,
    });
    expect(page.root).toEqualHtml(`
      <rocket-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rocket-card>
    `);
  });
});
