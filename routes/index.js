const { Pool } = require('pg')

const express = require('express');
const router = express.Router();

const pool = new Pool({
  user: process.env.POSTGRES_USER || process.env.PGUSER,
  host: process.env.POSTGRES_HOST || process.env.PGHOST,
  database: process.env.POSTGRES_DB || process.env.PGDATABASE,
  password: process.env.POSTGRES_PASSWORD|| process.env.PGPASSWORD,
  port: 5432,
})

/* GET home page. */
router.get('/', async (req, res) => {
  try{
    
    const ingredients = await pool.query('SELECT * FROM e_numbers');
    
    res.render('home', {ingredients: ingredients.rows});
  } catch(error) {

    console.log(error)
    res.send(error)

  }
  
});

module.exports = router;
