import { Component, Prop, h } from '@stencil/core';
import { formatName } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return formatName(this.first, this.middle, this.last);
  }

  /*
  connectedCallback() {
    // Called when the component is added to the DOM.
  }
  disconnectedCallback() {
    // Called when the component is removed from the DOM.
  }
  componentWillLoad() {
    // Invoked before the component first renders, good for setup.
  }
  componentDidLoad() {
    // Invoked after the component first renders, good for DOM interactions.
  }
  componentShouldUpdate(newValue, oldValue, propName) {
    // Determines whether the component should re-render on prop/state change.
  }
  componentWillRender() {
    // Called before every render, including updates.
  }
  componentDidRender() {
    // Called after every render, including updates.
  }
  componentWillUpdate() {
    // Called before a re-render due to prop/state changes, not first render.
  }
  componentDidUpdate() {
    // Called after a re-render due to prop/state changes, not first render.
  }
*/
  
  // Returns the component’s JSX template.
  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
