import { newSpecPage } from '@stencil/core/testing';
import { AnotherOne } from '../another-one';

describe('another-one', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AnotherOne],
      html: `<another-one></another-one>`,
    });
    expect(page.root).toEqualHtml(`
      <another-one>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </another-one>
    `);
  });
});
