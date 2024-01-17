var express = require("express");
var router = express.Router();
var { Client } = require("pg");

require('dotenv').config();

async function randomPage(req, res) {
  const client = new Client();
  await client.connect();

  const data = await client.query("select id from info");
  console.log('The number is ', data.rows[0].id);
  await client.end();

  res.render("random", { title: data.rows[0].id, paragraphs: ["is the number"], links: [] });
}

router.all("*", randomPage);

module.exports = router;
