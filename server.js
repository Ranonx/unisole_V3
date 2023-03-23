const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const port = 3000; // Or any other port you want to use

app.use(express.static("public"));
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
