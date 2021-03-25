import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ checkMessage: 'Hello Server' }));

app.listen(3333, () => {
  console.log('Start Server On Development');
});
