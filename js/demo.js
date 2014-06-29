angular.module('demo', []).
    value('title', 'tweak ed').
    controller('demoCtrl', function($scope, $http, title) {
        $scope.title = title;
        $scope.person = 'A';

        $scope.contents = {};
        $scope.updates = {};
        
        $http.get('curriculumA.json')
            .then(function(res) {
                $scope.contents['A'] = res.data.content;
                $scope.updates['A'] = res.data.updates;
            });

        $http.get('curriculumB.json')
            .then(function(res) {
                $scope.contents['B'] = res.data.content;
                $scope.updates['B'] = res.data.updates;
            });

        $http.get('people.json')
            .then(function(res) {
                $scope.people = res.data.people;
            });
        
        $scope.changePerson = function(person) {
            $scope.person = person;
        };
    });
