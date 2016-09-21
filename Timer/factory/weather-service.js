app.factory('weatherService', function($resource){
	return {
		APIKEY:"Chengdu&appid=d9335ab796415e2fb2a415a36ba169ec",
		data :$resource('http://api.openweathermap.org/data/2.5/weather?q=Chengdu&appid=d9335ab796415e2fb2a415a36ba169ec')
	}
	
});