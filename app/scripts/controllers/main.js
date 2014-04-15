'use strict';

angular.module('LeaderboardApp')
  .controller('MainCtrl', function ($scope, GroupService) {
    $scope.groups = GroupService.query(); // load all groups
    $scope.newGroup = new GroupService(); // create an empty new group

    // saving a new group
    $scope.createGroup = function() {
    	$scope.newGroup.score = 0;

        // call the service
        $scope.newGroup.$save(function() {
            // when saved, reload the list and recreate a new group
            $scope.groups = GroupService.query();
            $scope.newGroup = new GroupService();
        });
    }
  });
