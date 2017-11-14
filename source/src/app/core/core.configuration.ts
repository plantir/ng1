export const configuration = ($locationProvider: angular.ILocationProvider) => {
    'ngInject';
    $locationProvider.hashPrefix('');
    // $locationProvider.html5Mode(true);
};
