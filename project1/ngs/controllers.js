app.controller('dayCtrl', ['$scope','notify', function($scope,notify){
	
	var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	$scope.day = dayNames[new Date().getDay()];
	$scope.tomorrow = dayNames[(new Date().getDay() + 1) %7];
	$scope.callNotify = function(msg) {
		console.log(msg);
		notify(msg);

	}
	$scope.testing = notify.testing;
}]);

//in console, type following code to check the controller scope
//angular.element(document.getElementById("id of controller tag")).scope