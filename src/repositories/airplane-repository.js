const CrudRespository = require('./crud-repository');
const { Airplane } = require('../models');

class AirplaneRepository extends CrudRespository {
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepository;