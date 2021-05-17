export default class BaseComponent {
  constructor() {
    this.handlers = [];
  }
  _setHandlers(listeners) {
    this._pushListener(listeners);
    this._addEventListener();
  }
  _pushListener(listeners) {
    listeners.forEach(({ element, event, callback }) => {
      const bindCallback = callback.bind(this);
      this.handlers.push({
        element,
        event,
        bindCallback,
      });
    });
  }
  _addEventListener() {
    this.handlers.forEach(({ element, event, bindCallback }) => {
      element.addEventListener(event, bindCallback);
    });
  }
  _removeEventListener() {
    this.handlers.forEach(({ element, event, bindCallback }) => {
      element.removeEventListener(event, bindCallback);
    });
  }
}