const mongoose = require('mongoose');

// Product model
const ModelSchema = new mongoose.Schema({
  titulo: {type: String, required: true},
  descripcion: {type: String, required: true},
  categoria: {type: String, required: true},
  fecha: {type: String, required: true},
  comentarios: {type: [], required: true},
});

// Add model and export
const model = mongoose.model('post', ModelSchema, 'post');

module.exports = model;
