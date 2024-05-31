const { crypto } = require("../../../configs/crypto.config");
const { profiles } = require("../../../models");

const router = require("express").Router({
  mergeParams: true,
});

router.post("/", async (req, res) => {
  const { userId, password } = req.body;
  const { id } = req.params;
  const profile = await profiles.create({
    userId: userId,
    password: await crypto.encode(password),
    id: id,
  });
  res.send({ msg: "good", profile: profile });
});
router.get("/", (req, res) => {
  console.log(req.params);
});

module.exports = router;

