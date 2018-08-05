import './login-modal.component.scss';
import * as md5 from 'md5';
import { IUserService } from '../../services/user.service';
import { IUserResource } from '../../factory/user.factory';
import angular = require('angular');
declare const gapi: any;
class LoginModalController {
  user: any = {};
  ajaxLoading: boolean = false;
  registerType = 'email';
  mobile_regex = /[0-9]{11}/gm;
  email_regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  captcha: {
    response: any;
    widgetId: any;
    check_recaptcha: () => void;
    setResponse: (response: any) => void;
    setWidgetId: (widgetId: any) => void;
    cbExpiration: () => void;
  };

  constructor(
    private $mdDialog: ng.material.IDialogService,
    private $user: IUserService,
    private $userFactory: IUserResource,
    private $state: ng.ui.IStateService,
    private localStorageService: ng.local.storage.ILocalStorageService,
    private $window: ng.IWindowService,
    private $timeout: ng.ITimeoutService,
    private vcRecaptchaService: any
  ) {
    'ngInject';
  }
  //    custom_validation(value: string) {
  //         let test = this.regex.exec(value);
  //         return test;
  //     }
  $onInit() {
    this.captcha = {
      response: null,
      widgetId: null,
      check_recaptcha: () => {
        this.vcRecaptchaService.execute(this.captcha.widgetId);
      },
      setResponse: (response: any) => {
        this.user.recaptcha = response;
        this.login();
      },
      setWidgetId: (widgetId: any) => {
        this.captcha.widgetId = widgetId;
      },
      cbExpiration: () => {
        this.vcRecaptchaService.reload(this.captcha.widgetId);
        this.captcha.response = null;
      }
    };
  }
  custom_validation(value: string) {
    let mobile = this.mobile_regex.exec(value);
    let email = this.email_regex.exec(value);
    if (mobile) {
      this.user.type = 'mobile';
      this.user.mobile = value;
    } else if (email) {
      this.user.type = 'email';
      this.user.email = value;
    }
    return mobile || email;
  }
  closeModal() {
    this.$mdDialog.cancel();
  }
  forgotPassword() {
    this.$mdDialog.hide();
  }
  login() {
    // this.user.type = this.registerType;
    let user = angular.copy(this.user);
    if (user.password) {
      user.password = md5(user.password);
    }
    this.$userFactory
      .login({}, user)
      .$promise.then(res => {
        if (!res.user.is_verified) {
          this.$mdDialog.cancel();
          this.localStorageService.set('auth', res.token);
          let url = this.$state.href('active-user', {}, { absolute: true });
          this.$window.location.href = url;
          return;
        }
        this.localStorageService.set('auth', res.token);
        this.$window.location.reload();
      })
      .catch(err => {
        let message = 'مشخصات ورود به سایت اشتباه است';
        this.$mdDialog.show(
          this.$mdDialog
            .alert()
            .title(message)
            .ok('باشه')
            .multiple(true)
        );
      })
      .finally(() => {
        this.vcRecaptchaService.reload(this.captcha.widgetId);
      });
  }
  GoogleAuth() {
    this.$timeout(() => {
      gapi.load('auth2', () => {
        // retrieve the singleton for the GoogleAuth library and set up the client.
        let auth2 = gapi.auth2.init({
          client_id:
            '1046464065634-4fms6f7klu8p4qeuce8gu36ttrjnsnsa.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin'
        });
        [].forEach.call(
          document.querySelectorAll('.google-auth'),
          (el: Element) => {
            auth2.attachClickHandler(
              el,
              {},
              (googleUser: any) => {
                this.user.email = googleUser.getBasicProfile().getEmail();
                this.registerType = 'google';
                this.user.token = googleUser.getBasicProfile().getId();
                let fullName = googleUser.getBasicProfile().getName();
                this.user.name = fullName.split(' ')[0];
                this.user.family = fullName.split(' ')[1];
                this.register();
              },
              function(error: string) {
                // alert(JSON.stringify(error, undefined, 2));
              }
            );
          }
        );
      });
    }, 10);
  }
  register() {
    this.ajaxLoading = true;
    this.user.type = this.registerType;
    let user = angular.copy(this.user);
    this.$userFactory.register({}, user).$promise.then(res => {
      if (res.status === 200) {
        this.localStorageService.set('auth', res.token);
        this.$window.location.reload();
      }
      if (res.status === 201) {
        this.localStorageService.set('auth', res.token);
        let url = this.$state.href('active-user', {}, { absolute: true });
        this.$window.location.href = url;
      }
    });
  }
  close() {
    this.$mdDialog.hide();
  }
}

export class LoginModal implements ng.IComponentOptions {
  static selector = 'loginModal';
  static template = require('./login-modal.component.html');
  static bindings = {};
  static controller = LoginModalController;
}
