
export default class Page {
  constructor(options) {
    this.options = options;
    this.init();
  }

  init() { }

  static create(options) {
    return new this(options);
  }
}