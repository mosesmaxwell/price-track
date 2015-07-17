angular.module( 'ngStarter', [
  'templates-app',
  'templates-common',
  'ui.router',
  'nvd3ChartDirectives',
  'ngStarter.home',
  'ngStarter.about',
  'ngStarter.bus'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngStarter' ;
    }
  });
});
