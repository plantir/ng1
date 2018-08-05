import './active-user.component.scss';
class ActiveUserController {}

export class ActiveUser implements ng.IComponentOptions {
  static selector = 'activeUser';
  static template = require('./active-user.component.html');
  static bindings = {};
  static controller = ActiveUserController;
}
