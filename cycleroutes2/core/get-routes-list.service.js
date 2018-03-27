// Get the list of routes
angular
  .module('getRoutesListSvc', [])
  .service('getRoutesListSvc', function($http) {
    this.getPosts = function() {
      return $http.get('data/all-routes.json');
    }
  });
