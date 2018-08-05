import * as angular from 'angular';
import { routing } from './%name%.routes';

export const moduleName = angular
  .module('application.%name%', ['ui.router'])
  .config(routing).name;
