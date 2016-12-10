/**
 * Created by prateekposte on 12/8/16.
 */
document.getElementById('focus').focus(); //To focus on the Anchor Tag

//FOR MODAL
var modal = document.getElementById('myModal'); // For Modal
var btn = document.getElementById("btn"); //Button to open the modal
var span = document.getElementsByClassName("close")[0];//Close the modal

// Open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
// Close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close if clicked anywhere
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Angular Part

var app = angular.module('myApp', []); //Initialize app

// Angular Controller
app.controller('mainCtrl', function($scope, getData, $log){

    $scope.getSpriteStyle = function(id){return '0 ' + (id * 18.5) + 'px';}

    // Getting programs list
    getData.getPrograms().then(function(data){
        $scope.programs = data.data;
    });

    // Getting Pricing list
    getData.getPricing().then(function(data){
        $scope.prices = data.data;
    });

});
//Factory which will have the data
app.factory('getData', function($http){
    function getPrograms(){
        return $http.get('https://api.myjson.com/bins/5bdb3')
    };

    function getPricing(){
        return $http.get('https://api.myjson.com/bins/17oy7')
    };

    return{
        getPrograms: getPrograms,
        getPricing: getPricing
    };
});