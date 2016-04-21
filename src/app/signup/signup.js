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
  /*
  $http.get('/server/api/user').
    success(function(data, status, headers, config) {
      console.log(data, status, headers, config);
    }).
    error(function(data, status, headers, config) {
      console.log(data, status, headers, config);
    });
    */
    
  $scope.user = {};
  $scope.password = '';
  $scope.result = '';
  $scope.progress = 0;
  $scope.save = function() {
    $scope.progress = 1;
    $scope.user.username = $scope.user.email;
    $http.post('/api/user', $scope.user).
    success(function(data, status, headers, config) {
      $scope.progress = 0;
      $scope.result = 'Signup Success!';
       $scope.user = {};
       $scope.password = '';
       $scope.signupForm.$setPristine();
    }).
    error(function(data, status, headers, config) {
      $scope.result = 'Signup Error! '+JSON.stringify(data);
    });
  };
});
