import './app-menu.component.scss';
class AppMenuController {}

export class AppMenu implements ng.IComponentOptions {
  static selector = 'appMenu';
  static template = require('./app-menu.component.html');
  static bindings = {};
  static controller = AppMenuController;
}
