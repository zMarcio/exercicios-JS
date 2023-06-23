const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao:String
})


const HomeModel = mongoose.model('Home', HomeSchema);

// module.exports = HomeModel;
//aqui vc valida a classe e seguinte a isso exporta
class Home {

}

module.exports = home
