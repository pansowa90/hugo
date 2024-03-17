import './text.scss';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Component from "Component/Component";

export default class Text extends Component {
  constructor(options) {
    super(options);
  }

  setup() {
    let tl = gsap.timeline({ delay: .5 });

    tl.from('.text--main', {
      y: 400,
      opacity: 0,
      ease: 'power4',
      duration: 3
    })
      .from('.text--next', {
        x: -100,
        opacity: 0,
        ease: 'power4',
        duration: 3
      }, 0.7)
      .from('.text--after', {
        y: 50,
        opacity: 0,
        ease: 'power2',
        duration: 3
      }, 1);
  };


  init() {
    this.setup();
  }
}