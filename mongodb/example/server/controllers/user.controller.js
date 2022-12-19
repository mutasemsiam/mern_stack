const User = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
  User.find()
    .then(allDUsers => res.json({ users: allDUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(oneSingleUser => res.json({ user: oneSingleUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


//The method bellow will check if name exists before creating new one. If it exists it will return the error 
// message "Error Message Goes Here". However if it doesn't exist, it will create new document

module.exports.createNewUser2 = (req, res) => {
  User.exists({ name: req.body.name })
  .then(userExists => {
    if (userExists) {
      // Promise.reject() will activate the .catch() below.
      return Promise.reject('Error Message Goes Here');
    }
    return User.create(req.body);
  })
  .then(saveResult => res.json(saveResult))
  .catch(err => res.json(err));

}