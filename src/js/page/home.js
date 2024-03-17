import Page from './Page';
import { gsap } from "gsap";

import Box from 'Component/box/Box';
// import Text from 'Component/text/Text';

class HomePage extends Page {
  constructor() {
    super();
  }

  init() {
    super.init();

    this.animateSections();
    Box.create();

    // Text.create();
  }

  animateSections() {
    let tl = gsap.timeline({ delay: .25 });

    tl.from('.section--welcome', {
      y: 400,
      opacity: 0,
      ease: 'power4',
      duration: 2
    });
  }
}

HomePage.create();