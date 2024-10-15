import express from 'express';

import https from 'https';
import fs from 'fs';


const app = express();



app.get('/', (req, res) => {
  res.send('Hello, world! CHAT');
});

const PORT = 3000;

const options = {
  key: fs.readFileSync('/etc/certs/panda/zoonika.com_26-08-2024_05:01:30_letencrypt.key'),
  cert: fs.readFileSync('/etc/certs/panda/zoonika.com_26-08-2024_05:01:30_letencrypt.crt_v2')
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});