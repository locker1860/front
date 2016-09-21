// Code goes here

var myApp = angular.module('starWar',['ngResource']);
myApp.factory('characterList',function($resource,$http){
  var doRequest = function(){
    return $http({
      method:'GET',
      url:'characters.json'
    });
  }
  return{
    characters:function(){
      return doRequest();
    }
  }
});
myApp.factory('characterInfo',function($resource){
  var doRequest = function(url){
     return $resource(url);
  }
  return{
    getCharater:function(url){
      return doRequest(url);
    }
  }
});
myApp.factory('getFilms', function($q,$resource){
  return function (urls){

    var promises = urls.map(
      function (fimlUrl) {
        var deffered =$q.defer();

        $resource(fimlUrl).get().$promise.then(
          function(data){
            deffered.resolve(data);
          },
          function(err){
            deffered.reject();
            console.log(err)}
          );
        return deffered.promise;
      }
      );

    return $q.all(promises);
    
  };
})


var characterController = function(characterList,characterInfo,getFilms){
  var vm = this;
      vm.info = {};
      vm.characters = [];
      vm.filmsInfo=[];

  // characterList.characters().get().$promise.then(function(data){
    
  //   vm.info = data;
  
  // },function(err){console.log(err);});
  characterList.characters().then(function(data){
    vm.info = data.data;
    console.log(data);
  },function(err){console.log(err);});
  
  vm.showFilms = function(){
    characterInfo.getCharater(vm.characterUrl).get().$promise.then(function(data){
    
    vm.characterInfo = data;
    
    getFilms(vm.characterInfo.films).then(
      function(datas){
        vm.filmsInfo = datas;
        console.log(vm.filmsInfo);
      },
      function(err){console.log(err);});

  },function(err){
    vm.filmsInfo={};
    console.log(err);});
  }
  
}
characterController.$inject = ['characterList','characterInfo','getFilms'];
myApp.controller('characterController',characterController);

