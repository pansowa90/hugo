export default class Component {

  constructor(element, options) {
    this.element = element
    this.options = options || {};

    this.appendMods();
    this.init();
  }

  appendMods() {
    if (this.options.mods) {
      this.options.mods.forEach(mod => {
        this.element.classList.add(mod);
      });
    }
  }

  init() { }

  static create(options) {
    const element = options && options.element
      ? options.element
      : this.className ? document.querySelector(`.${this.className}`) : document.body;
    return new this(element, options);
  }
}