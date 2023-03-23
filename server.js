const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require("./routes/route.js");
const port = 8000;

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
