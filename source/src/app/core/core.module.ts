import * as angular from 'angular';
import '../../Assets/lib/ng-flow';
import '../../Assets/lib/angular-scroll';
import '../../Assets/lib/data-grid/dataGrid.js';
import '../../Assets/lib/data-grid/pagination.js';
import '../../Assets/lib/ng-jalali/ng-jalaali-flat-datepicker.js';
import '@uirouter/angularjs';
import 'oclazyload';
import 'angular-ui-validate';
import 'angular-recaptcha';
import 'ng-meta';
import * as ngResource from 'angular-resource';

import { myConstant } from './core.constant';
import { moduleRun } from './core.run';
import { configuration } from './core.configuration';
import { routing } from './core.routes';

import { moduleName as MyMaterial } from '../my-material/my-material.module';

import { App } from './components/app/app.component';
import { MobileMenu } from './components/mobile-menu/mobile-menu.component';
import { AppMenu } from './components/app-menu/app-menu.component';
import { AppFooter } from './components/app-footer/app-footer.component';
import { AppHeader } from './components/app-header/app-header.component';
import { NotFound } from './components/404/404.component';

import { OnErrDirective } from './directives/on-err';
import { MdLoadingDirective } from './directives/md-loading';
import { CollapseDirective } from './directives/collapse';
import { DropDownDirective } from './directives/drop-down';
import { appHeader_directive } from './components/app-header/app-header.directive';
import { clickOutSide_directive } from './directives/clickOutSide';
import { OwlCarouselDirective } from './directives/owl-carousel';
import { MyGridPaginationDirective } from './directives/my-grid-pagination';
import { categoryResultTree_directive } from './directives/category-result-tree';
import { NgRequired_directive } from './directives/ng-required';
import { custom_scrollbar_directive } from './directives/custom_scroll';

import { EnumFilter } from './filters/enum';
import { PersianDigitFilter } from './filters/persian-digit';
import { PersianDateFilter } from './filters/persian-date';
import { EnumToSelectFilter } from './filters/enum-to-select';

export const moduleName = angular
  .module('application.core', [
    'ui.router',
    'oc.lazyLoad',
    'duScroll',
    'flow',
    'ui.validate',
    'ngMeta',
    ngResource,
    MyMaterial
  ])
  .constant('myConstant', myConstant)

  .component(App.selector, App)
  .component(AppHeader.selector, AppHeader)
  .component(AppMenu.selector, AppMenu)
  .component(AppFooter.selector, AppFooter)
  .component(MobileMenu.selector, MobileMenu)
  .component(NotFound.selector, NotFound)

  .filter('persianDigit', PersianDigitFilter)
  .filter('persianDate', PersianDateFilter)
  .filter('enum', EnumFilter)
  .filter('enumToSelect', EnumToSelectFilter)

  .directive('onErr', OnErrDirective)
  .directive('mdLoading', MdLoadingDirective)
  .directive('collapsed', CollapseDirective)
  .directive('dropDown', DropDownDirective)
  .directive('clickOutSide', clickOutSide_directive)
  .directive('appHeader', appHeader_directive)
  .directive('owlCarousel', OwlCarouselDirective)
  .directive('myGridPagination', MyGridPaginationDirective)
  .directive('categoryResultTree', categoryResultTree_directive)
  .directive('ngRequired', NgRequired_directive)
  .directive('customScrollBar', custom_scrollbar_directive)

  .config(configuration)
  .config(routing)
  .run(moduleRun).name;
