angular.module( 'gpt', [
  'templates-app',
  'templates-common',
  'ui.router',
  'ui.bootstrap',
  'gpt.dashboard',
  'gpt.about'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/dashboard' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.title = 'Pricetrack';
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Price Tracker';
    }
  });
});
