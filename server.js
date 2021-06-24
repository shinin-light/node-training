const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3456;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header({"Access-Control-Allow-Origin": "*"});
  next();
})  

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client.html'));
});

app.post('/echo', (req, res) => {
  console.log(`Received request with body:`, req.body);
  const content = req.body.content;
  res.status(200);
  res.json({ content });
});

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
