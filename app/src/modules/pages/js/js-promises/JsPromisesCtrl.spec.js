'use strict';

describe('JsPromisesCtrl', function(){
	var ctrl, scope ={};
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller('JsPromisesCtrl', {$scope: scope});
	}));
	
	/*
	it('should do something', function() {
	});
	*/
});