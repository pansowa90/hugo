import Page from './Page';
import { gsap } from "gsap";

import Section from 'Component/section/Section';

class HomePage extends Page {

  constructor(element, options) {
    super(element, options);
  }

  init() {
    this.element.querySelectorAll('.section').forEach(element => {
      Section.create({ element });
    });
    this.animateSection();
  }

  animateSection() {
    let tl = gsap.timeline({ delay: .25 });

    tl.from('.section--main', {
      y: 400,
      opacity: 0,
      ease: 'power4',
      duration: 2
    });
  }
}

HomePage.create();