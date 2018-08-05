import './register-modal.component.scss';
import { IUserService } from '../../services/user.service';
import { IUserResource } from '../../factory/user.factory';
import * as md5 from 'md5';
import angular = require('angular');
declare const gapi: any;
class RegisterModalController {
    constructor(private $mdDialog: ng.material.IDialogService) {
        'ngInject';
    }
    close() {
        this.$mdDialog.hide();
    }
}

export class RegisterModal implements ng.IComponentOptions {
    static selector = 'registerModal';
    static template = require('./register-modal.component.html');
    static bindings = {
    };
    static controller = RegisterModalController;
}
