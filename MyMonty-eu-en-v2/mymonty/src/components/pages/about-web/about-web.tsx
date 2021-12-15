import { Component, h } from '@stencil/core';

@Component({
  tag: 'about-web',
  styleUrl: 'about-web.css',
  shadow: false,
})
export class AboutWeb {

  render() {
    return (
      <div class="wrapper">
        <text-with-color></text-with-color>
        {/* <contact-form></contact-form> */}
      </div>
    );
  }

}
