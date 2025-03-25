const express = require('express');
const app = express();

const mongoose = require('mongoose');


const port = process.env.PORT || 5000;
require('dotenv').config()




async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use('/', (req, res) => {
    res.send("nlink server is running");
  });
}

main().then(() =>console.log("MongoDB connected sucssefully")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});