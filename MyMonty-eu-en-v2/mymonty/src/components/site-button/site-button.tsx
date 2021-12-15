import { Component, h } from '@stencil/core';

@Component({
  tag: 'site-button',
  styleUrl: 'site-button.css',
  shadow: false,
})
export class SiteButton {

  render() {
    return (
      <button class="site-button">
        <slot></slot>
      </button>
    );
  }

}
