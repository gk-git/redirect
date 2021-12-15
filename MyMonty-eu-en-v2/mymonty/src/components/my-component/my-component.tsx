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
          <hero-section></hero-section>
          <div class="wrapper">
            {/* <text-with-color></text-with-color> */}
            <contact-form></contact-form>
          </div>
        </div>
      </div>
    );
  }
}
