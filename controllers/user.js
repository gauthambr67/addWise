const User = require("../models/user");
const Advice = require("../models/advice");

module.exports = {
  new: newUser,
  create,
};

function create(req, res) {
  User.create(req.body, function (err, user) {
    res.redirect("/user/new");
  });
}

function newUser(req, res) {
  User.find({}, function (err, user) {
    res.render("user/new", {
      title: "Add user",
      user,
    });
  });
}
