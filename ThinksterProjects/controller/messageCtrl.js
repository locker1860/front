/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-09 09:52:34
 * @version $Id$
 */

app.controller('messageCtrl', ['$scope', function($scope){
	$scope.message = "hello";
	$scope.updageMessage = function(message){
		$scope.message = message;
	}
}]);