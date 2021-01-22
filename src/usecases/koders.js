//endpoint de consulta 

const Koders = require('./../models/koders')  // en este caso se ocupa mayuscula 

function getAll (){
 return Koders.find({})
}

function getById (id) {
    // return Koder.find({ _id: id})
    return Koders.findById(id)
}

function create (name, age) {
    return Koders.create({ name, age })
}

function deleteById (id) {
    return Koders.findByIdAndDelete(id)
}

function updateById (id, name, age) {
    return Koders.findByIdAndUpdate(id, { name, age })
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    updateById
}

