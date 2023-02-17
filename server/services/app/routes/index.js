const router = require("express").Router();
const userRoute = require("./user");
const contactRoute = require("./contact");

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "ok" });
});

router.use("/users", userRoute);
router.use("/contacts", contactRoute);

module.exports = router;
