const Advice = require("../models/advice");
const User = require("../models/user");

module.exports = {
  index,
  show,
  new: newAdvice,
  create,
};

function index(req, res) {
  Advice.find({}, function (err, advice) {
    res.render("advice/index", { title: "All Advice", advice });
  });
}

function show(req, res) {
  Advice.findById(req.params.id).exec(function (err, advice) {
    User.find({})
      .where("_id")
      .exec(function (err, user) {
        console.log(user);
        console.log(advice);
        res.render("advice/show.ejs", {
          title: "Advice Shared",
          advice,
          user,
        });
      });
  });
}

function newAdvice(req, res) {
  res.render("advice/new", { title: "Share Advice" });
}

function create(req, res) {
  const advice = new Advice(req.body);
  advice.save(function (err) {
    if (err) return res.redirect("/advice/new");
    console.log(advice);
    res.redirect(`/advice/${advice._id}`);
  });
}
