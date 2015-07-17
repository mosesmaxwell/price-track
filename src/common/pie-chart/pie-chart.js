/**
 * Each module has a <moduleName>.module.js file.  This file contains the angular module declaration -
 * angular.module("moduleName", []);
 * The build system ensures that all the *.module.js files get included prior to any other .js files, which
 * ensures that all module declarations occur before any module references.
 */
(function (module) {
    module.directive("pieChart", ['$compile', function ($compile) {
		return {
			restrict: 'E',
			link: function(scope, el, attr) {}
		};
	}]);
}(angular.module("ngStarter.pie-chart", [])));