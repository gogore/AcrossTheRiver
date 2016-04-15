(function() {
	var app = angular.module('store', []);
	var gem = {
		name : 'Dodecahedron',
		price : 1000000000000,
		description : "this is my first test"
	}
	app.controller('StoreController', function($scope) {
		$scope.product = gem;
	});
})();
