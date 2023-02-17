const ContactController = require("../controllers/contact");
const authentication = require("../middlewares/authenticateUser");

const router = require("express").Router();

router.get("/", authentication, ContactController.getContact);
router.post("/", authentication, ContactController.addContact);

module.exports = router;
