/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-14 16:40:57
 * @version $Id$
 */

app.controller('ListCtrl',['$scope','messages',function($scope,messages){
	var self = this;
	self.messages = messages.list;
}]);

app.controller('PostCtrl', ['messages', function(messages){
	var self = this;
	self.newMessage = 'Hello World!';
	self.addMessage = function(m) {
		messages.add(m);
		self.newMessage = '';
	}
	
}]);