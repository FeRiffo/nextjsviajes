
const mongoose = require('mongoose');
//const uriClient = "mongodb://127.0.0.1:27017/admin"//mongo local
//Conectamos a el servicio
const uriNube = "mongodb+srv://feriffo:Animatefer1424@cluster0.8und4ew.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uriNube)
.then(db=>console.log('Conectamos la base de datos '))
.catch(err=>console.log(err));

module.exports=mongoose;

