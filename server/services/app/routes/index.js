const router = require("express").Router();
const userRoute = require("./user");

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "ok" });
});

router.use("/users", userRoute);

module.exports = router;
