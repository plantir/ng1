import * as angular from 'angular';
import { Routing } from './%name%.routes';

export const moduleName = angular
  .module('application.%name%', ['ui.router'])
  .config(Routing).name;
