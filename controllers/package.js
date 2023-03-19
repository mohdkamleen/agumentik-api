const Package = require("../models/package");

// there are methode use for crud operation 
module.exports.add = async (req, res, next) => {
  try {
    const package = new Package(req.body);
    await package.save();
    res.status(200).json(package);
  } catch (err) {
    next(err);
  }
};

module.exports.get = async (req, res, next) => {
  try {
    const package = await Package.find();
    res.status(200).json(package);
  } catch (err) {
    next(err);
  }
};

module.exports.getById = async (req, res, next) => {
  try {
    const package = await Package.findById(req.params.id);
    res.status(200).json(package);
  } catch (err) {
    next(err);
  }
};

module.exports.updateById = async (req, res, next) => {
  try {
    const package = await Package.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(package);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteById = async (req, res, next) => {
  try {
    const package = await Package.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(package);
  } catch (err) {
    next(err);
  }
};

