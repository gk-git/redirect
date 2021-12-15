import { Component, Prop, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'hero-section',
  styleUrl: 'hero-section.scss',
  shadow: false,
})
export class HeroSection {

  @Prop() image: string;
  @Prop() text: string;
  @Prop() title: string;

  render() {
    return (
      <section id="hero-section" class="hero__section">
        <div class="hero__img-container">
          <img src="https://flagcdn.com/h120/pl.webp" alt="Hero Picture" class="hero__img-container__img" />
          <p class="hero__img-container__title" innerHTML={this.title}></p>
        </div>
        <div class="hero__title-container">
          <p class="hero__title" innerHTML={this.text}>

          </p>
          <p class="hero__title">
            <span class="hero__title__help">Help us </span
            ><span class="hero__title__make"
            >make banking accessible for all</span
            >
          </p>
        </div>
      </section>
    );
  }

}
