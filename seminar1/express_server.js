//
const express = require('express');

//cream serverul
const app = express();
const port = 8000;

app.use(express.static('./seminar1/src/public'));

app.get("/", (req, res) => {
    res.send("Hello from Express ...")
})

//listen on port 8000
app.listen(port, () => {
    console.log('Express server running at port:${port}')
});