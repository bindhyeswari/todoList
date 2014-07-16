

var todoApp = angular.module('todoApp', []);

todoApp.controller('todoController', function ($scope, $http) {

    $scope.tasks = [];
    $scope.inpTask = '';

    $scope.createTask = function (event) {
        if (event.keyCode === 13) {
            $scope.tasks.push({
                title: $scope.inpTask,
                done: false
            });
            $scope.inpTask = '';
        }

    };

    $scope.deleteTask = function (task) {
        $scope.tasks.splice($scope.tasks.indexOf(task), 1);
    };

    $scope.doneTask = function (task) {
        $scope.tasks[$scope.tasks.indexOf(task)].done = true;
    };

});