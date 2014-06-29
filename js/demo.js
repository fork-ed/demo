angular.module('demo', []).
    value('title', 'TeachUp').
    controller('demoCtrl', function($scope, title) {
        $scope.title = title;
    });
