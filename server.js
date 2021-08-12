const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//initial route
app.get("/", (req, res) => {
  res.send("<h1>Api is ready!!!</h1");
});
//route
app.use(require("./Routes/userRoute"));

//database connection
mongoose
  .connect(process.env.mngldbs, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("connected with db"))
  .catch(e => console.log("Error in db connect", e));

//listen post
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
