const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
// const router = express.Router();

const app = express();
const PORT = process.env.PORT || 8000;

// HTTP request logger, shows speed/time/request respond
app.use(morgan("tiny"));

app.use("/users/", require("./userRoutes/usersRoute"));
// // connecting to mongoDB
// mongoose.connect("mongodb://localhost/my_database", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });
// // Models are defined through the Schema interface
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// const BlogPost = new Schema({
//   author: ObjectId,
//   title: String,
//   body: String,
//   date: Date,
// });

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
