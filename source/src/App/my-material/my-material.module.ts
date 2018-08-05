// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

import 'angular-material/modules/js/core/core.js';
import 'angular-material/modules/js/backdrop/backdrop.js';
import 'angular-material/modules/js/dialog/dialog.js';
import 'angular-material/modules/js/icon/icon.js';
import 'angular-material/modules/js/sidenav/sidenav.js';
import 'angular-material/modules/js/button/button.js';
import 'angular-material/modules/js/input/input.js';
import 'angular-material/modules/js/checkbox/checkbox.js';
import 'angular-material/modules/js/progressCircular/progressCircular.js';
import 'angular-material/modules/js/select/select.js';
import 'angular-material/modules/js/toast/toast.js';
import 'angular-material/modules/js/panel/panel.js';
import 'angular-material/modules/js/tooltip/tooltip.js';
import 'angular-material/modules/js/navBar/navBar.js';
import 'angular-material/modules/js/radioButton/radioButton.js';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import { configuration } from './my-material.config';
export const moduleName =
    angular.module('application.myMaterial', [
        'material.components.dialog',
        'material.components.icon',
        'material.components.sidenav',
        'material.components.button',
        'material.components.input',
        'material.components.checkbox',
        'material.components.progressCircular',
        'material.components.select',
        'material.components.toast',
        'material.components.tooltip',
        'material.components.panel',
        'material.components.navBar',
        'material.components.radioButton',
        'ngMessages'
    ])
        .config(function ($mdIconProvider: ng.material.IIconProvider, $mdDialogProvider: any) {
            'ngInject';
            $mdIconProvider
                // .defaultFontSet('fa')
                // .defaultIconSet('my/app/icons.svg')
                // .iconSet('social', 'my/app/social.svg')
                // .icon('android', 'my/app/android.svg')
                .icon('aparat', '/assets/img/icons/aparat.svg')
                .icon('telegram', '/assets/img/icons/telegram.svg');
            $mdDialogProvider.addPreset('myConfirm', {
                methods: ['title', 'textContent', 'ok', 'cancel', 'doneTitle', 'doneTextContent', 'doneOk', 'doneFN'],
                options: function () {
                    return {
                        template: `
                            <md-dialog class="confirm-dialog">
                                <div ng-if="!dialog.$done && !dialog.$error">
                                    <div class="warning pulseWarning">
                                        <span class="body pulseWarningIns"></span>
                                        <span class="dot pulseWarningIns"></span>
                                    </div>
                                    <h2>{{ dialog.title }}</h2>
                                    <p>{{ dialog.textContent }}</p>
                                    <div>
                                        <md-button class="md-raised md-primary" ng-click="dialog.done()" tabindex="1">{{ dialog.ok }}</md-button>
                                        <md-button class="md-raised md-warn md-hue-2" ng-click="dialog.abort()" tabindex="2">{{ dialog.cancel }}</md-button>
                                    </div>
                                </div>
                                <div ng-if="dialog.$done">
                                    <div class="success animate" style="display: block;">
                                        <span class="line tip animateSuccessTip"></span>
                                        <span class="line long animateSuccessLong"></span>
                                        <div class="placeholder"></div> <div class="fix"></div>
                                    </div>
                                    <h2>{{ dialog.doneTitle }}</h2>
                                    <p>{{ dialog.doneTextContent }}</p>
                                    <div>

                                        <md-button class="md-raised md-primary" ng-click="dialog.hide()" tabindex="1">{{ dialog.doneOk }}</md-button>
                                    </div>
                                </div>
                                <div ng-if="dialog.$error">
                                    <div class="error pulseError">
                                        <span class="body pulseErrorIns"></span>
                                        <span class="dot pulseErrorIns"></span>
                                    </div>
                                    <h2>{{ dialog.errTitle }}</h2>
                                    <p>{{ dialog.errTextContent }}</p>
                                    <div>
                                        <md-button class="md-raised" ng-click="dialog.done()" tabindex="1">{{ dialog.errRetry }}</md-button>
                                        <md-button class="md-raised md-warn md-hue-2" ng-click="dialog.abort()" tabindex="2">{{ dialog.errCancel }}</md-button>
                                    </div>
                                </div>
                                <md-loading ng-if="dialog.loading"></md-loading>
                            </md-dialog>`,
                        controller: function mdDialogCtrl($mdDialog: ng.material.IDialogService, $mdConstant: any) {
                            'ngInject';
                            this.$done = false;
                            this.ok = this.ok || 'بله انجام بده';
                            this.title = this.title || 'آیا از انجام این کار مطمئن هستید؟';
                            this.textContent = this.textContent || 'این عملیات غیر قابل بازگشت می باشد';
                            this.doneOk = this.doneOk || 'انجام شد';
                            this.doneTitle = this.doneTitle || 'انجام شد';
                            this.doneTextContent = this.doneTextContent || 'در خواست شما با موفقیت انجام شد';
                            this.errTitle = this.errTitle || 'خطایی رخ داده است.';
                            this.errTextContent = this.errTextContent || 'در انجام عملیات مشکلی پیش آمده است';
                            this.cancel = this.cancel || 'منصرف شدم';
                            this.errCancel = this.errCancel || 'منصرف شدم';
                            this.errRetry = this.errRetry || 'دوباره سعی کن';

                            this.done = () => {
                                if (this.doneFN && typeof this.doneFN === 'function') {

                                    this.loading = true;
                                    this.doneFN().then(() => {
                                        this.loading = false;
                                        this.$error = false;
                                        this.$done = true;

                                    }, (err: any) => {
                                        this.loading = false;
                                        this.$error = true;

                                    });
                                } else {
                                    this.hide(true);
                                }
                            };

                            this.hide = function () {
                                $mdDialog.hide(true);
                            };
                            this.abort = function () {
                                $mdDialog.cancel();
                            };
                            this.keypress = function ($event: any) {
                                if ($event.keyCode === $mdConstant.KEY_CODE.ENTER) {
                                    $mdDialog.cancel();
                                }
                            };
                        },
                        controllerAs: 'dialog',
                        bindToController: true,
                        clickOutsideToClose: true,
                        escapeToClose: true
                    };
                }
            });
        })
        .config(configuration)
        .name;
