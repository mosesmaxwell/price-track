angular.module( 'gpt.about', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about-us',
    views: {
      "main": {
        controller: 'aboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{ pageTitle: 'AboutUs' }
  });
})

.controller( 'aboutCtrl', function aboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.

});
