app.controller('timerCtrl',function($scope,$interval){
	$scope.clock  = new Date();
	
	$interval(function(){
		var update = new Date;
		$scope.clock = update;
	},1000);
});