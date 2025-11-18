import { Component, h } from '@stencil/core';

@Component({
  tag: 'hardcoded-values',
  styleUrl: 'hardcoded-values.css',
  shadow: true,
})
export class HardcodedValues {
  render() {
    return (
      <h1 style={{ color: 'red', fontSize: '24px' }}>FROM STENCIL</h1>
    );
  }
}
