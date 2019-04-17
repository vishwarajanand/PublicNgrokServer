const http = require('http');
const ngrok = require('ngrok');

const port = 3000;
var savedReqResponse = {};
const server = http.createServer((req, res) => {

  const { headers, method, url } = req;
  let body = [];
  req.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // At this point, we have the headers, method, url and body, and can now
    // do whatever we need to in order to respond to this request.
    console.log(JSON.stringify(body));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    savedReqResponse[url] = { headers, method, url, body };
    res.end(JSON.stringify(savedReqResponse));
  });
});

server.listen(port, (err) => {
  if (err) {
    return console.log(`Something bad happened: ${err}`);
  }
  console.log(`Node.js server listening on ${port}`);

  ngrok.connect(port, function (err, url) {
    console.log(`Node.js local server is public at ${url}`);
  });
});
