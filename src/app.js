import express from "express";

const APP = express();

APP.get("/api/users", function (req, res) {
  res.send(["Arya", "Prasad", "Arhat"]);
});

APP.post("/api/users/add", function (req, res) {
  res.send({ msg: "User added in DB" });
});

APP.put("/api/users/update", function (req, res) {
  res.send({ msg: "User updated in DB" });
});

APP.delete("/api/users/delete", function (req, res) {
  res.send({ msg: "User deleted in DB" });
});
APP.listen(4002, function () {
  console.log("Application Started");
});
