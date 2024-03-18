
export default class Page {
  constructor(element, options) {
    this.element = element;
    this.options = options || {};

    this.init();
  }

  init() { }

  static create(options) {
    const element = options?.element ?? this.className ? document.querySelector(`.${this.className}`) : document.body;


    return new this(element, options);
  }
}