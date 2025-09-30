//importam nodulul http
const http = require('http');
const port = 3000;

//cream serverul
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.write('Hello!');
    res.end();
});

//listen on port 3000
server.listen(port, () => {
    console.log('Server running at port:${port}');
});