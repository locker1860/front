/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-11 09:47:24
 * @version $Id$
 */

app.factory('notify', ['$window', function(win){
	var msgs = [];
	var testing = "test the scope of factory"
	return function (msg){
		msgs.push(msg);
		if (msgs.length >=3) {
			win.alert(msgs.join('\n'));
			console.log(msgs.length);
			msgs = [];
		}
		
	};
}]);
app.factory('batchLog', ['$interval','$log', function($interval,$log){
	var messageQueue = [];
	function log() {
		if (messageQueue.length){
			$log.log('batchLog message:',messageQueue);
			console.log("message shoots!")
			messageQueue = [];
		}
	}

	$interval(log,2000);
	return function (message){
		messageQueue.push(message);
	};
}])