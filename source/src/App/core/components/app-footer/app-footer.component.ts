import './app-footer.component.scss';
class AppFooterController {}

export class AppFooter implements ng.IComponentOptions {
  static selector = 'appFooter';
  static template = require('./app-footer.component.html');
  static bindings = {};
  static controller = AppFooterController;
}
