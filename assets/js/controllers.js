'use strict';

var deviceApp = angular.module('deviceApp', []);

deviceApp.controller('DeviceListCtr', function($scope, $http) {
	$http.get('data/devices.json').success(function(data) {
		$scope.devices = data;
	});

	$scope.orderProp = '-name';
});