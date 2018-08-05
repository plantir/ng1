import './home-register.component.scss';
class HomeRegisterController {}

export class HomeRegister implements ng.IComponentOptions {
  static selector = 'homeRegister';
  static template = require('./home-register.component.html');
  static bindings = {};
  static controller = HomeRegisterController;
}
