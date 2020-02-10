const express = require ('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://rickdouglas:rickdouglas@omnistack9-6p5hm.mongodb.net/omnistack9?retryWrites=true&w=majority',{
    useNewUrlParser :true,
    useUnifiedTopology:true,
})

app.use(express.json());

app.use(routes);


app.listen(3333);