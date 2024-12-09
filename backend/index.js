const connectToMongo = require("./db.js");
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("/api/auth", require('./routes/auth.js'));
app.use("/api/notes", require('./routes/notes.js'));

connectToMongo();

app.listen(port, () => {
    console.log("Connected to app");
})