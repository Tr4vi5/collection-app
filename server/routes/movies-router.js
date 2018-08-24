//requires
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
//routes
router.get('/', (req,res)=>{
    const queryText = `SELECT "title", "description", "genre", "image_path", "release_date" FROM "movies" JOIN "movie_genres" ON "movies"."movie_genres_id" = "movie_genres"."id";`;
    pool.query(queryText).then((results)=>{
        console.log(results);
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error in GETting all movies',error);
        res.sendStatus(500);
    });
});//end all movies GET


router.post('/', (req, res) => {
    console.log('in POST', req.body);
    let movieIn = req.body;
    const queryText = `INSERT INTO "movies" 
    ("title","description","movie_genres_id","image_path","release_date")
    VALUES ($1,$2,$3,$4,$5);`;
    pool.query(queryText, [movieIn.titleIn, movieIn.descriptionIn, movieIn.movieGenreIn, movieIn.dateIn]).then(()=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('Error in server-side POST', error);
        res.sendStatus(500);
    });
});//end movies POST

//export
module.exports = router;