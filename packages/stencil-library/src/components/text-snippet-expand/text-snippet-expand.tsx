import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'text-snippet-expand',
  shadow: false,
  styles: `
    .toggle {
      display: inline-block;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s ease, color 0.2s ease;
    }

  `
})
export class TextSnippetExpand {
  @Prop() maxLength: number = 100;
  @Prop() text: string = "";

  @State() isCollapsed: boolean = true;

  get isCollapsable() {
    return this.text.length > this.maxLength;
  }

  get displayText() {
    return this.isCollapsed ? this.text.substring(0, this.maxLength) : this.text;
  }

  handleClick() {
    this.isCollapsed = !this.isCollapsed;
  }
  render() {
    if (!this.text) { return };

    return (
      <div>
        {this.isCollapsable == false
          ? null
          :
          <span class="toggle" onClick={() => this.handleClick()}>
            {this.isCollapsed ? '►' : '▼'}
          </span>
        }
        <span>{this.displayText}</span>
      </div>
    );
  }
}
