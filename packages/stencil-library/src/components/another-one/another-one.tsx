import { Component, h } from '@stencil/core';

@Component({
  tag: 'another-one',
  styleUrl: 'another-one.css',
  shadow: true,
})
export class AnotherOne {
  // @Prop() initialCount: number;
  // @State() counter: number = 0;

  /* make sure to include Event in the import apart from EventEmitter from @stencil/core !!!

  ---- alternate approach, use alias to avoid conflicts w/ global Event 
   import { Event as StencilEvent, EventEmitter } from '@stencil/core';
   @StencilEvent() myEvent: EventEmitter<{value: string, ev: Event}>; */
  // @Event() countIncreased: EventEmitter<number>; // CANNOT be caught by sibling component

  // handleClick = () => {
  //   this.counter = this.counter + 1;
  //   this.countIncreased.emit(this.counter);
  // }

  // on first load if initial value is passed, assign that as state, otherwise restart from default
  // componentWillLoad(){
  //   if(this.initialCount){
  //     this.counter = this.initialCount;
  //   }
  //   console.log('<another-one> rendered')
  // }

  render() {
    return (
      // <button onClick={this.handleClick}>
      //   DAMN {this.counter}
      // </button>
      <h1>ANOTHER ONE</h1>
    );
  }
}
