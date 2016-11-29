var app = angular.module('jazibApp', []);

app.controller('projectInfoCtrl', function($scope){

$scope.projectInfo = [ {
img: "images/madlib.png",
text: "This is when Angular hit me and my world changed."
}]

});




app.directive('project', function(){

          return {
            restrict: 'E',
            templateUrl: 'project.html'

            };

});
