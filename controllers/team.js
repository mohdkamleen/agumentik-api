const Team = require("../models/team");
 
// these are methode use for crud operation 
module.exports.add = async (req, res, next) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(200).json(team);
  } catch (err) {
    next(err);
  }
};

module.exports.get = async (req, res, next) => {
  try {
    const team = await Team.find();
    res.status(200).json(team);
  } catch (err) {
    next(err);
  }
};

module.exports.getById = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    res.status(200).json(team);
  } catch (err) {
    next(err);
  }
};

module.exports.updateById = async (req, res, next) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(team);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteById = async (req, res, next) => {
  try {
    const team = await Team.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(team);
  } catch (err) {
    next(err);
  }
};

