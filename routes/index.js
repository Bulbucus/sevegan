const { Pool } = require('pg')

const express = require('express');
const router = express.Router();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
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
