const express=require('express');
const routes=require('./routes/index.route.js');

const app=express();
const port=3070;
const path = require('path');

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/', express.static('./public'));

app.use(routes);

app.listen(port,()=>{
    console.log(`Server is running on localhost port ${port}`);
});