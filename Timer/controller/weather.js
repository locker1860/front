app.controller('weatherCtrl', ['$scope','weatherService', function(
	$scope,weatherService){
	$scope.APIKEY = 	weatherService.APIKEY;
	weatherService.data.get().$promise.then(
		function(data){
			$scope.weather = data.weather[0].icon;
			$scope.icon = "http://openweathermap.org/img/w/"+$scope.weather+".png";
			console.log('get success');
		},
		function(err){
			console.log(err);
		});
}])