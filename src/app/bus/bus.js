angular.module( 'ngstart.bus', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'bus', {
    url: '/bus',
    views: {
      "main": {
        controller: 'BusCtrl',
        templateUrl: 'bus/bus.tpl.html'
      }
    },
    data:{ pageTitle: 'Bus' }
  });
})

.controller( 'BusCtrl', function BusCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.

});
