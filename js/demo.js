angular.module('demo', []).
    value('title', 'tweak ed').
    controller('demoCtrl', function($scope, $http, title) {
        $scope.title = title;
        $scope.user = 'Kenni';
        $scope.course = 'Sergei';

        $scope.contents = {};
        $scope.updates = {};
        
        $http.get('curriculumA.json')
            .then(function(res) {
                $scope.contents['Sergei'] = res.data.content;
                $scope.updates['Sergei'] = res.data.updates;
            });

        $http.get('curriculumB.json')
            .then(function(res) {
                $scope.contents['Kenni'] = res.data.content;
                $scope.updates['Kenni'] = res.data.updates;
            });

        $http.get('people.json')
            .then(function(res) {
                $scope.people = res.data.people;
            });
        
        $scope.changePerson = function(person) {
            $scope.course = person;
        };
    });
