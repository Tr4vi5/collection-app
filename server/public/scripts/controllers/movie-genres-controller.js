myApp.controller('MovieGenresController',['$http', function($http){
    console.log('In MovieGenresController');
    const self = this;
    
    self.getAllGenres = function(){
        $http({
            method: 'GET',
            url: '/movie-genres'
        }).then(function(response){
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
    self.removeMovieGenre = function(genre){
        console.log('In removeGenre function', genre);
        if(genre.count > 0){
            alert('You cannot remove a genre while there are movies of that genre in your collection')
        }else{
            $http({
                method: 'DELETE',
                url: '/movie-genres/delete/' + genre.id
            }).then(function (response) {
                console.log('Success in removeMovieGenre', response.data);
                self.getAllGenres();
            }).catch(function (error) {
                console.log('Error in removeMovieGenre', error);
                alert(`Could not remove ${genre.genre} genre`)
            });
        };
    };// end removeGenre function
    self.getAllGenres();
}]);