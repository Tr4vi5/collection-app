myApp.controller('MovieGenresController',['$http', function($http){
    console.log('In MovieGenresController');
    const self = this;
    
    self.getAllGenres = function(){
        $http({
            method: 'GET',
            url: '/movie-genres'
        }).then(function(response){
            console.log('Back from server with:', response.data);
            self.allGenres = response.data;
        }).catch(function(error){
            console.log('Error in GETting from server:', error);
            alert('Could not get movie genres');
        });
    };// end getAllGenres function
    self.addGenre = function(genre){
        $http({
            method: 'POST',
            url: '/movie-genres',
            data: genre
        }).then(function(response){
            console.log('POSTed to server successfully', response.data);
            self.getAllGenres();
        }).catch(function(error){
            console.log('Error in POST to /movie-genres', error);
            alert('Sorry, could not add genre');
        });
    };// end addGenre function
    self.removeGenre = function(genre){
        console.log('In removeGenre function', genre);
        
    };// end removeGenre function
    self.getAllGenres();
}]);