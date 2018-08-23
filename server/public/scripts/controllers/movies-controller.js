myApp.controller('MoviesController',['$http', function($http){
    console.log('In Movies Controller');
    const self = this;

    self.addMovie = function(movie){
        self.movieToAdd = movie;
        console.log('About to add', movie);  

        $http({
            method: 'POST',
            url: '/movies',
            data: self.movieToAdd
        }).then(function(response){
            console.log('POSTing to server:', response.data);
        }).catch(function(error){
            console.log('Error in POST to server', error);
        });
    };

}]);