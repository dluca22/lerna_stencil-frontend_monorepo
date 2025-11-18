import { newSpecPage } from '@stencil/core/testing';
import { HardcodedValues } from '../hardcoded-values';

describe('hardcoded-values', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HardcodedValues],
      html: `<hardcoded-values></hardcoded-values>`,
    });
    expect(page.root).toEqualHtml(`
      <hardcoded-values>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hardcoded-values>
    `);
  });
});
