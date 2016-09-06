
var myApp = angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
 .controller("myCtr", function($scope, $http){
  $scope.wUrl = "";
  $scope.fav = [];
  $scope.addF = function ()
  {
   if($scope.counter)
   {
    //if($scope.fav == undefined) $scope.fav = ""; 
    //alert($scope.data.coord.lon);
    $scope.fav.push({text:$scope.chosenPlace, temp:$scope.data.main.temp});
    console.log(1);
    $scope.counter = 0;
   }
   
  }

  $scope.removeF = function(num)
  {
    $scope.fav.splice(num, 1);
  }

  $scope.weather = function ()
  {
    if($scope.chosenPlace != undefined)
    {
    var URL = 'http://api.openweathermap.org/data/2.5/weather';
  
      var request = {
      method: 'GET',
      url: URL,
      params: {
        q: $scope.chosenPlace,
        mode: 'json',
        units: 'imperial',
        cnt: '7',
        appid: '01b8195b8b3d0ad58c8227898b30018b'
      }
    };
  
  $http(request)
    .then(function(response) {
      $scope.wUrl = "weather.html"
      $scope.data = response.data;
      $scope.counter = 1;
     
    }).
    catch(function(response) {
      $scope.data = response.data;
    });
  }
  
 }
  })