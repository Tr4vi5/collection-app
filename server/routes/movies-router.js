//requires
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
//routes
router.post('/', (req, res) => {
    console.log('in POST', req.body);
    let movieIn = req.body;
    const queryText = `INSERT INTO "movies" 
    ("title","description","movie_genres_id","release_date")
    VALUES ($1,$2,$3,$4);`;
    pool.query(queryText, [movieIn.titleIn, movieIn.descriptionIn, movieIn.movieGenreIn, movieIn.dateIn]).then(()=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('Error in server-side POST', error);
        res.sendStatus(500);
    });
});//end movie POST
//export
module.exports = router;