import { newSpecPage } from '@stencil/core/testing';
import { TextSnippetExpand } from '../text-snippet-expand';

describe('text-snippet-expand', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TextSnippetExpand],
      html: `<text-snippet-expand></text-snippet-expand>`,
    });
    expect(page.root).toEqualHtml(`
      <text-snippet-expand>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-snippet-expand>
    `);
  });
});
