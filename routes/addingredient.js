const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('addingredient');
})

router.post('/', async (req, res) => {
  const {e_number, vegan, name} = req.body
  console.log(req.body)
  try{
    const query = await pool.query('INSERT INTO e_numbers (e_number, vegan, name) VALUES ($1, $2, $3) RETURNING *', [e_number.trim(), vegan, name.trim()])
    console.log(query.rows)
  } catch(error) {
    console.log(error);
  }
  
  res.redirect('/addingredient')
})

module.exports = router;