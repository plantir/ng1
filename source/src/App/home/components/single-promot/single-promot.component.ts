import './single-promot.component.scss';

class SinglePromotController {}

export class SinglePromot implements ng.IComponentOptions {
  static selector = 'singlePromot';
  static template = require('./single-promot.component.html');
  static bindings = {};
  static controller = SinglePromotController;
}
