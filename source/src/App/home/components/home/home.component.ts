import './home.component.scss';
class HomeController {}

export class Home implements ng.IComponentOptions {
  static selector = 'home';
  static template = require('./home.component.html');
  static bindings = {};
  static controller = HomeController;
}
