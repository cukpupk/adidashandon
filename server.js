const express = require('express')
const path = require('path')
const app = express();
const PORT = process.env.port || 8080;
const https = require('https');
const locale = process.env.locale || 'cn';
const fs = require('fs');
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

if (PORT === '443') {
  let options;
  if (locale === 'en') {
    options = {
      key: fs.readFileSync('./dist/clobotics.com.key'),
      cert: fs.readFileSync('./dist/clobotics.com.crt'),
    };
  } else {
    options = {
      key: fs.readFileSync('./dist/clobotics.cn.key'),
      cert: fs.readFileSync('./dist/clobotics.cn.crt'),
    };
  }
  https.createServer(options, app).listen(PORT, () => {
    console.log(
      `The server is running at https://localhost:${PORT}/`,
    );
  });
} else {
  app.listen(PORT, () => {
    console.log(
      `The server is running at http://localhost:${PORT}/`,
    );
  });
}
