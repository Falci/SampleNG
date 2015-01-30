angular
    .module('app', ['ngResource','ngRoute'])
    .config(function($routeProvider) {
	
		
		return $routeProvider.when('/users',{
		    templateUrl: 'partials/users.html',
		    controller: 'UsersCtrl'
		})
		.when('/user/:id', {
		    templateUrl: 'partials/user.html',
		    controller: 'UserCtrl'
		})
		.when('/user', {
		    templateUrl: 'partials/user.html',
		    controller: 'UserCtrl'
		})
		.when('/', {
			redirectTo : '/users'
		})
		.otherwise({
			templateUrl : 'partials/404.html'
		});
		
	});