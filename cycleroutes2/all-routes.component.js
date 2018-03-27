// Register `allRoutes` component, along with its associated controller and template
angular
  .module('allRoutes', [
    'getRoutesListSvc',
    'numberConversionFtl',
    'numberUnitsFtl',
    'organiserNameFtl'
  ])
  .component('allRoutes', {
    // template: 'test template'
    templateUrl: 'all-routes/all-routes.template.html',
    css: 'all-routes/all-routes.css',
    controller: allRoutesController,
    controllerAs: 'allRoutesCtrl'
  });

function allRoutesController(getRoutesListSvc) {
  getRoutesListSvc.getPosts().then(response => {
    this.routes = response.data;
  });

};
