const User = require("../models/user.model");
const express = require("express");

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    return res.status(200).send("data received");
  } catch (er) {
    return res.status(500).send({ error: er });
  }
});

router.post("/create", async (req, res) => {
  try {
    let user =await User.create(req.body);
    console.log(user)
    return res.status(200).send(user);
  } catch (er) {
    console.log(er)
    return res.status(500).send({ error: er });
  }
});
module.exports = router;
