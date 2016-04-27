angular.module( 'gpt.login', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'loginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'Login' }
  });
})

.controller( 'loginCtrl', function loginCtrl( $scope, $http ) {
  // This is simple a demo for UI Boostrap.
  $scope.user = {};
  $scope.result = '';
  $scope.progress = 0;
  
  $scope.login = function() {
    $scope.progress = 1;
    $scope.user.username = $scope.user.email;
    $http.post('/api/auth', $scope.user).then(function(res) {
      if(!res.error) {
        $scope.result = 'Login Success!';
        $scope.user = {};
        return;
      }
      return $scope.result = 'Login error!' + JSON.stringify(res);
    });
  };
  
});
