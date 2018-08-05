import { IMyConstant } from './core.constant';

export const configuration = (
  $stateProvider: ng.ui.IStateProvider,
  $locationProvider: angular.ILocationProvider,
  flowFactoryProvider: any,
  myConstant: IMyConstant,
  ngMetaProvider: any
) => {
  'ngInject';
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
  flowFactoryProvider.defaults = {
    target: `${myConstant.ApiUrl}/upload`,
    permanentErrors: [404, 500, 501],
    minFileSize: 0,
    singleFile: true,
    testChunks: false
  };
  $stateProvider.decorator('data', ngMetaProvider.mergeNestedStateData);
  //   vcRecaptchaServiceProvider.setDefaults({
  //     key: '6Lf0nmcUAAAAAPCrDpgnG8j9TlwG9oMbX7N5vJaG',
  //     size: 'invisible',
  //     lang: 'fa'
  //   });
  ngMetaProvider.setDefaultTitle('title set from config');
  ngMetaProvider.setDefaultTag('description', 'description set from config');
  ngMetaProvider.setDefaultTag('keyword', 'keywords set from config');
};
