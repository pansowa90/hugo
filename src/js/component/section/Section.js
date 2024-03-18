import './section.scss';

import Box from 'Component/box/Box';
import Component from "Component/Component";

export default class Section extends Component {
  static className = 'section';

  constructor(element, options) {
    super(element, options);
  }

  init() {
    Box.create({
      element: this.element.querySelector('.box'),
      mods: ["primary"]
    });

    this.setupAnimation();
  }

  setupAnimation() { };

}