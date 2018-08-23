//requires
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
//routes
router.get('/', (req,res)=>{
    const queryText = `SELECT * FROM "movie_genres";`;
    pool.query(queryText).then((results)=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error getting results from database:', error);
        res.sendStatus(500);
    });
});
//export
module.exports = router;