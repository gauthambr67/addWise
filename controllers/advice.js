const Advice = require("../models/advice");
const User = require("../models/user");

module.exports = {
  index,
  show,
  new: newAdvice,
  create,
  update,
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
    res.redirect("/advice");
  });
}

/*
function deleteAdvice(req, res) {
  const advice = new Advice();
  advice.findByIdAndRemove({ _id: req.params.id });
  res.redirect("/advice");
}

async function update(req, res) {
  const advice = new Advice({
    _id: req.params.id,
    title: req.body.title,
    category: req.body.category,
    advice: req.body.advice,
    profExp: req.body.profExp,
    userName: req.body.userName,
  });
  await advice.updateOne(
    { _id: req.params.id },
    { $set: advice },
    res.redirect("/advice")
    //show(req.params.id)
  );
  await advice.save();
}
*/
