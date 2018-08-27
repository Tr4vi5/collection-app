myApp.controller('MoviesController',['$http', function($http){
    console.log('In Movies Controller');
    const self = this;
    self.formShow = false;

    self.getAllMovies = function(){
        $http({
            method: 'GET',
            url: '/movies'
        }).then(function(response){
            self.allMovies = response.data; 
        }).catch(function(error){
            console.log('Error GETting all movies from server:', error);
            alert('Sorry, couldn\'t find any movies in your collection!');
        });
    };// end getAllMovies function

    self.getGenres = function(){
        $http({
            method: 'GET',
            url: '/movie-genres/formgenres'
        }).then(function(response){
            self.genres = response.data;
        }).catch(function(error){
            console.log('Error in movies-controller genre GET request:', error);
            alert('Could not get genres');
        });
    };// end getGenres function

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
            self.getAllMovies();
        }).catch(function(error){
            console.log('Error in POST to server', error);
        });
    };// end addMovie function

    self.reMovie = function(movie){
        console.log('in reMovie', movie.id);
        $http({
            method: 'DELETE',
            url: '/movies/delete/' + movie.id
        }).then(function(response){
            console.log('Success in reMovie!', response.data);
            self.getAllMovies()///.then(function(){});
            alert(movie.title + ' removed!');
        }).catch(function(error){
            console.log('Problem in reMovie', error);
            alert('Problem removing ', movie.title);
        });
    };// end reMovie function

    self.showForm = function(){
        self.formShow = !self.formShow;
    }// end showForm function

    self.getGenres();
    self.getAllMovies();
}]);