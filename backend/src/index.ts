import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello, World!'))

app.listen(8080, () => {
    console.log('REST API running on port 8080');
})

// connect to monogodb: change localhost to mongo
