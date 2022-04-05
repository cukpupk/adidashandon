const express = require('express')
const path = require('path')
const app = express();
const PORT = process.env.port || 8080;
const https = require('https');
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

https.createServer(app).listen(PORT, () => {
  console.log(
    `The server is running at https://localhost:${PORT}/`,
  );
});
