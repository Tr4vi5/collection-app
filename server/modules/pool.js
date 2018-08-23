//Database Requires Declarations, and config
const pg = require('pg');
const url = require('url');
let config = {};

if (process.env.DATABASE_URL){
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.splot(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true,
        max: 10,
        idleTimeoutMillis: 30000
    };
} else {
    config = {
        host: 'localhost',
        port: 5432,
        database: 'collections',
        max: 10,
        idleTimeoutMillis: 30000
    };
};// end config if/else

const pool = new pg.Pool(config);

//connect to SQL
pool.on('connect', ()=>{
    console.log('PostgreSQL connected'); 
});

pool.on('error', (err)=>{
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
});

//export
module.exports = pool;