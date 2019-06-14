const express = require('express');
const path = require('path'); //?what is this?
const PORT = process.env.PORT || 8080;
const app = express();

// I'll set views an stuff later
// app.use(express.static( path.join(__dirname,'')))

app.get('/', (req,res) =>
{
    res.send('{data:"Hey it worked!"}');
});

app.get('/joke', (req,res) =>
{
    var oneLinerJoke = require('one-liner-joke');
    var getRandomJoke = oneLinerJoke.getRandomJoke();
    res.send(getRandomJoke);
});

const { Pool } = require('pg');
const pool = new Pool(
    {
        connectionString: process.env.DATABASE_URL,
        ssl:true
    }
);

app.get('/db',  async(req,res) =>
{
    try
    {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM _test');
        const results = { 'results': (result) ? result.rows : null};
        res.render('pages/db', results );
        client.release();
    }
    catch (err)
    {
        console.log(err);
        res.send('Error' + err);
    }
})

app.listen(PORT,() => console.log(`App is running on port ${PORT}`));

