'use strict';

var baseUrl = 'https://leader.azure-mobile.net/tables/';

angular.module('LeaderboardApp')
	.factory('GroupService', ['$resource', function ($resource) {
	    return $resource(baseUrl + "groups/:id", { id: '@id' },
	        {
	            "update": { method: "PATCH", isArray: false }
	        });
	}]);