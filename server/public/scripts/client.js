const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

myApp.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/movies',{
        templateUrl: 'views/movies.html',
        controller: 'MoviesController as mc'
    }).when('/movie-genres',{
        templateUrl: 'views/movie-genres.html',
        controller: 'MovieGenresController as mgc'
    }).otherwise({
        templateUrl: 'views/404.html'
    });
});//end angular routes config