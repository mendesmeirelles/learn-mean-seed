'use strict';

describe('JsVariablesCtrl', function(){
	var ctrl, scope ={};
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller('JsVariablesCtrl', {$scope: scope});
	}));
	
	/*
	it('should do something', function() {
	});
	*/
});