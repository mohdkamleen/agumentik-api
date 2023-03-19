const Testemonial = require("../models/testemonial");

// there are methode use for crud operation 
module.exports.add = async (req, res, next) => {
  try {
    const testemonial = new Testemonial(req.body);
    await testemonial.save();
    res.status(200).json(testemonial);
  } catch (err) {
    next(err);
  }
};

module.exports.get = async (req, res, next) => {
  try {
    const testemonial = await Testemonial.find();
    res.status(200).json(testemonial);
  } catch (err) {
    next(err);
  }
};

module.exports.getById = async (req, res, next) => {
  try {
    const testemonial = await Testemonial.findById(req.params.id);
    res.status(200).json(testemonial);
  } catch (err) {
    next(err);
  }
};

module.exports.updateById = async (req, res, next) => {
  try {
    const testemonial = await Testemonial.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(testemonial);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteById = async (req, res, next) => {
  try {
    const testemonial = await Testemonial.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(testemonial);
  } catch (err) {
    next(err);
  }
};

