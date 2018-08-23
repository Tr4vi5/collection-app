//Requires and Declarations
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const moviesRouter = require('./routes/movies-router.js');
const movieGenresRouter = require('./routes/movie_genres-router.js');
//Uses
app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use('/movies', moviesRouter);
app.use('/movie-genres', movieGenresRouter);
//Spin
app.listen(PORT, ()=>{
    console.log('Server running on port', PORT);
});