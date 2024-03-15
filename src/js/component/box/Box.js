import './box.scss';
import { gsap } from "gsap";
import Component from "../Component";

export default class Box extends Component {
  constructor(options) {
    super(options);
  }

  setup() {
    gsap.to(this.options.className, { rotation: 180, x: 100, y: -100, duration: 1 });
  }

  init() {
    this.setup();
  }
}