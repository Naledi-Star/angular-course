(function(){
'use strict';

    //first module 001
    // angular.module('myFirstApp',[])

    // .controller('my1stController',function($scope) {
    //     $scope.name = "Naledi"

    //     $scope.sayHello = function () {
    //         return "Hello World";
    //     }

    // });

    //002
    // angular.module('NameCalculator',[])

    // .controller('nameCalcCtrl' , function($scope){
    //     $scope.name = "";
    //     $scope.totalValue = totalNameValue;

    //     $scope.displayNumeric = function() {
    //         var totalNameValue = calcNumeric4String($scope.name);
    //         $scope.totalValue = totalStringVAlue;
    //     }

    //     function calcNumeric4String(string) {
    //         var totalStringVAlue =0;
    //         for (var i = 0; i < string.length; i++){
    //             totalStringVAlue += string.charCodeAt(i)
    //         }
            
    //     }


    // });


    //003
    angular.module ('DIModule',[]) 

    .controller ('DIController', DIController);

    function DIController($scope, $filter){
        $scope.name ="Naledi";
    }

    $cope.upper = function() {
        var toUpper = $filter('uppercase');
        $scope.name = toUpper($scope.name);

    }


})();