myApp.controller('MoviesController',['$http', function($http){
    console.log('In Movies Controller');
    const self = this;

    self.getGenres = function(){
        $http({
            method: 'GET',
            url: '/movie-genres'
        }).then(function(response){
            console.log(response.data);
            self.genres = response.data;
        }).catch(function(error){
            console.log('Error in movies-controller genre GET request:', error);
            alert('Could not get genres');
        });
    };

    self.addMovie = function(movie){
        self.movieToAdd = movie;
        console.log('About to add', movie);  
        $http({
            method: 'POST',
            url: '/movies',
            data: self.movieToAdd
        }).then(function(response){
            console.log('POSTing to server:', response.data);
            self.movieIn = {};
        }).catch(function(error){
            console.log('Error in POST to server', error);
        });
    };

    self.getGenres();
}]);