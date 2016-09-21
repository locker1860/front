/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-14 16:25:21
 * @version $Id$
 */
app.factory('messages',function(){
	var messages = {};

	messages.list = [];

	messages.add = function(m){
		messages.list.push({id : messages.list.length, text: m});
		
	};

	return messages;
});
