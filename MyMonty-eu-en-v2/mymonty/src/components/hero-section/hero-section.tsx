import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hero-section',
  styleUrl: 'hero-section.scss',
  shadow: false,
})
export class HeroSection {

  render() {
    return (
      <section id="hero-section" class="hero__section">
        <div class="hero__img-container">
          <img src="" alt="Hero Picture" class="hero__img-container__img" />
          <p class="hero__img-container__title">Join Our Team </p>
        </div>
        <div class="hero__title-container">
          <p class="hero__title">
            Submit your <span class="hero__title__cv">CV</span> or check out our <span class="hero__title__vacancies">vacancies</span> today
            on <span class="hero__title__linkedin">LinkedIn</span> and we will reach
            out to you<span class="break"></span> once we find
            a <span class="hero__title__position">position</span> that fits <span class="break"></span> your profile.
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
