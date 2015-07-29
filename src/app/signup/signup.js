angular.module( 'gpt.signup', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'signup', {
    url: '/signup',
    views: {
      "main": {
        controller: 'signupCtrl',
        templateUrl: 'signup/signup.tpl.html'
      }
    },
    data:{ pageTitle: 'SignUp' }
  });
})

.controller( 'signupCtrl', function signupCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.

});
