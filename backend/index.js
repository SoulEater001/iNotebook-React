import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import connectToMongo from './db.js';

import authRoutes from './routes/auth.js';
import notesRoutes from './routes/notes.js';

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);

connectToMongo();

app.listen(port, () => {
    console.log("Connected to app");
})