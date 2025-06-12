const { City } = require("../models");
const CrudRespository = require('./crud-repository');

class CityRepository extends CrudRespository {
    constructor() {
        super(City);
    }
};

module.exports = CityRepository;