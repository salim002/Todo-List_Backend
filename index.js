import express from 'express';
import cors from 'cors';

import connectToMongo from './config/db.js';
import Routes from './routes/route.js';

const app = express();
const PORT = 8000;

connectToMongo();

app.use(cors());
app.use(express.json());

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost/${PORT}`)
});