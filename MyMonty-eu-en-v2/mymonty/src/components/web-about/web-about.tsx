import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'web-about',
  styleUrl: 'web-about.css',
  shadow: false,
})
export class WebAbout {

  render() {
    return (
      <Host>
        <div class="red">
          about
        </div>
      </Host>
    );
  }

}
