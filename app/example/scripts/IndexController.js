angular
  .module('example')
  .controller('IndexController', function($scope, supersonic, $window) {
    $scope.navbarTitle = "Settings";

    $scope.openSite = function () {
      $window.open("http://www.google.com", "_blank");
    };

  });
