import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
})
export class MyComponent {

  render() {
    return (
      <div class="my-component">
        <div class="my-component--container">
          <text-with-color></text-with-color>
        </div>
      </div>
    );
  }
}
