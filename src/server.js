const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://rickdouglas:rickdouglas@omnistack9-6p5hm.mongodb.net/omnistack9?retryWrites=true&w=majority',{
    useNewUrlParser :true,
    useUnifiedTopology:true,
})
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


app.listen(3333);