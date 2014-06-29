angular.module('demo', []).
    value('title', 'TeachUp').
    controller('demoCtrl', function($scope, $http, title) {
        $scope.title = title;
        $scope.content = 
        $http.get('curriculumA.json')
            .then(function(res) {
                $scope.contents = res.data.content;
                $scope.updates = res.data.updates;
            });
    });
