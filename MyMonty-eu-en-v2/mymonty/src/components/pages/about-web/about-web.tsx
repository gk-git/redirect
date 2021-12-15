import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'about-web',
  styleUrl: 'about-web.css',
  shadow: false,
})
export class AboutWeb {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
