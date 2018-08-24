//requires
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
//routes
router.get('/', (req,res)=>{
    const queryText = `SELECT "genre", "movie_genres"."id" as "id", COUNT("movies"."movie_genres_id") FROM "movie_genres" LEFT JOIN "movies" ON "movie_genres"."id" = "movies"."movie_genres_id" GROUP BY "genre", "movie_genres"."id" ORDER BY "genre";`;
    pool.query(queryText).then((results)=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error GETting all genres from DB:', error);
        res.sendStatus(500);
    });
});// end /movie-genres GET
router.get('/formgenres', (req,res)=>{
    const queryText = `SELECT * FROM "movie_genres" ORDER BY "genre";`;
    pool.query(queryText).then((results)=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error getting results from database:', error);
        res.sendStatus(500);
    });
});// end /movie-genres/formgenres GET
router.post('/', (req,res)=>{
    console.log(req.body);
    const queryText = `INSERT INTO "movie_genres" ("genre") VALUES ($1);`;
    pool.query(queryText, [req.body.genre]).then(()=>{
        console.log('Success POSTing to /movie-genres');
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('Error POSTing to /movie-genres', error);
        res.sendStatus(500);
    });
});// end /movie-genres POST
router.delete('/delete/:id', (req,res)=>{
    console.log('/movie-genres DELETE', req.params.id);
    const queryText = `DELETE FROM "movie_genres" WHERE "id" = $1`;
    pool.query(queryText, [req.params.id]).then(()=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('Error in /movie-genres/delete/:id', error);
        res.sendStatus(500);
    });
});// end /movie-genres/delete/:id DELETE
//export
module.exports = router;