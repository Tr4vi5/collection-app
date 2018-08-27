//requires
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
//routes
router.get('/', (req,res)=>{
    const queryText = `SELECT "movies"."id" as "id", "title", "description", "rating", "director", "writers", "starring", "genre", "image_path", "runtime", "budget", "release_date" FROM "movies" JOIN "movie_genres" ON "movies"."movie_genres_id" = "movie_genres"."id" ORDER BY "title";`;
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
    ("title", "description", "rating", "director", "writers", "starring", "movie_genres_id", "image_path", "runtime", "budget", "release_date")
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11);`;
    pool.query(queryText, [movieIn.titleIn, movieIn.descriptionIn, movieIn.ratingIn, movieIn.directorIn, movieIn.writersIn, movieIn.starringIn, movieIn.movieGenreIn, movieIn.imageIn, movieIn.runtimeIn, movieIn.budgetIn, movieIn.dateIn]).then(()=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('Error in server-side POST', error);
        res.sendStatus(500);
    });
});//end movies POST

router.delete('/delete/:id', (req,res)=>{
    console.log('in DELETE', req.params.id);
    const queryText = `DELETE FROM "movies" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id]).then(()=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('Error in movies-router DELETE', error);
        res.sendStatus(500);
    }); 
});//end movies DELETE

//export
module.exports = router;