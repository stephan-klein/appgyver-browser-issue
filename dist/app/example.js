angular.module('example', [
  // Declare here all AngularJS dependencies that are shared by the example module.
  'supersonic'
]);

angular
  .module('example')
  .controller('IndexController', function($scope, supersonic, $window) {
    $scope.navbarTitle = "Settings";

    $scope.openSite = function () {
      $window.open("http://www.google.com", "_blank");
    };

  });
