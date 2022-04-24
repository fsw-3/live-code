const express = require('express');
const routes = require('./routes/index_route');


const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})


