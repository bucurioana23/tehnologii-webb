//
const express = require('express');

//cream serverul
const app = express();
const port = 8000;

//listen on port 8000
app.listen(8000, () => {
    console.log('Express server running at port:${port}')
});