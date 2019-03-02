var db = require("../models");

module.exports = function (app) {

  //get all bodies
  app.get("/api/bodies", function (req, res) {
    db.Body.findAll({}).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  //get bodie by id
  app.get("/api/bodies/:id", function (req, res) {
    db.Body.findOne({
      where: {
        id: req.params.id
      },
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  //update post by id
  app.put("/api/bodies/:id", function (req, res) {
    db.Body.update(req.body, {
      where: {
        id: req.params.id
      },
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });


  // Delete post by id
  app.delete("/api/bodies/:id", function (req, res) {
    db.Body.destroy({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });

  // Create new Post
  app.post("/api/bodies", function (req, res) {
    console.log(req.body);
    db.Body.create(req.body).then(function (newPost) {
      res.json(newPost);
    });
  });
};