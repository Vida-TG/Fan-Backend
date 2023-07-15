import express from 'express'
import { data } from './data.js';

const app = express();

app.get('/api/items', (req, res) => {
    res.send(data.items)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server started")
})