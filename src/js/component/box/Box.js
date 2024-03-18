import './box.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Component from "Component/Component";

export default class Box extends Component {
  static className = 'box';

  static component = {
    componentSel: '.box',
    containerSel: '.box__container'
  }

  constructor(element, options) {
    super(element, options);
  }

  get component() {
    return Box.component;
  }

  setup() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.component.componentSel,
        start: "top",
        end: "bottom",
        scrub: 1,
        pin: true,
        markers: true
      }
    });
    tl.to(this.component.containerSel, { rotation: 360, duration: 5 })
  }

  init() {
    // this.setup();
  }
}