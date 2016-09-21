/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-21 13:43:39
 * @version $Id$
 */

var app = angular.module('myApp',['ui.router','ngResource']);
app.config(function($stateProvider, $urlRouterProvider) {
	console.log("configuring");
	$urlRouterProvider.otherwise('/time');
	$stateProvider
		.state('time',{
			url:'/time',
			templateUrl:'/parcial/time.html',
			controller:'timerCtrl'})
			
		.state('weather',{
			url:'/weather',
			templateUrl:'/parcial/weather.html',
			controller:'weatherCtrl'
		});
});