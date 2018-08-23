myApp.controller('MoviesController',['$http', function($http){
    console.log('In Movies Controller');
    const self = this;

    self.movieToAdd={};

    self.addMovie = function(movie){
        self.movieToAdd = movie;
        console.log('About to add', movie);  
    };

}]);