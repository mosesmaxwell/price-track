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
  $http.get('/server/api/user').
    success(function(data, status, headers, config) {
      console.log(data, status, headers, config);
    }).
    error(function(data, status, headers, config) {
      console.log(data, status, headers, config);
    });
    
  $scope.user = {};
  $scope.result = '';
  $scope.save = function() {
    $scope.user.username = $scope.user.email;
    $http.post('/server/api/user', $scope.user).
    success(function(data, status, headers, config) {
      console.log(data, status, headers, config);
    }).
    error(function(data, status, headers, config) {
      console.log(data, status, headers, config);
    });
  };
});
