import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  assetsDirs: ['assets'],
  shadow: false,
})
export class MyComponent {

  render() {
    return (
      <div class="my-component">
        <div class="my-component--container">
          <hero-section image='Flag_of_Poland.svg' title="Join Our Team" text='Submit your <span class="hero__title__cv">CV</span> or check out our <span class="hero__title__vacancies">vacancies</span> today
            on <span class="hero__title__linkedin">LinkedIn</span> and we will reach
            out to you<span class="break"></span> once we find
            a <span class="hero__title__position">position</span> that fits <span class="break"></span> your profile.'></hero-section>
          <div class="wrapper">
            {/* <text-with-color></text-with-color> */}
            <contact-form></contact-form>
          </div>
        </div>
      </div>
    );
  }
}
