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

.controller( 'signupCtrl', function signupCtrl( $scope, $http ) {
  // This is simple a demo for UI Boostrap.
  $scope.user = {};
  $scope.result = '';
  $scope.save = function() {
    $http.post('/server/api/user', $scope.user).
    success(function(data, status, headers, config) {
      $scope.result = data;
    }).
    error(function(data, status, headers, config) {
      $scope.result = data;
    });
  };
});
