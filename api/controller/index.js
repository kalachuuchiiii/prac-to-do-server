const mongoose = require("mongoose");
const { create } = require('./methods/create.js')
const { read } = require('./methods/read.js')
const { update } = require('./methods/update.js')
const { remove } = require('./methods/delete.js')
const { filter } = require('./methods/filter.js')

const createCRUDController = (model) => {
  const Model = mongoose.model(model);
  if(!Model){
    throw new Error(`Model ${model} does not exist`);
  }
  return {
    create: create(Model, req, res),
    read: read(Model, req, res),
    update: update(Model, update, req, res),
    remove: remove(Model, req, res),
    filter: filter(Model, filter, req, res)
  }
}