const express = require("express");
const cors = require("cors");
const errorHandler = require("./helpers/errorHandler");
const PORT = process.env.PORT || 3000;
const app = express();
const mainRoutes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(mainRoutes);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log("Server run at PORT " + PORT);
});
