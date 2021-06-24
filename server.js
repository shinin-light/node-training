const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3456;

app.use(bodyParser.json());

app.post('/echo', (req, res) => {
  console.log(`Received request with body: ${req.body}`);
  const content = req.body.content;
  res.status(200).json({ content });
});

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
