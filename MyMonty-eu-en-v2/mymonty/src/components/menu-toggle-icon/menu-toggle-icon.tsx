import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'menu-toggle-icon',
  styleUrl: 'menu-toggle-icon.scss',
  shadow: false,
})
export class MenuToggleIcon {

  @Element() el!: HTMLElement;
  handleClick = (event) => {
    console.log('this.el.classList', this.el.querySelector('.menu-toggle-icon').classList.toggle('toggle'))
  }
  render() {
    return (
      <div class="menu-toggle-icon" onClick={this.handleClick}>
        <div class="menu-toggle-icon__line1"></div>
        <div class="menu-toggle-icon__line2"></div>
        <div class="menu-toggle-icon__line3"></div>
      </div>
    );
  }

}
