exports.get = function() {
    const salaModel = require("../models/salaModel")
    return salaModel.listarSalas();
}