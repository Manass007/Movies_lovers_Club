const express = require("express"); // npm i express
const mongoose = require("mongoose"); // npm i mongoose
require("dotenv").config(); // npm i dotenv
require("./models/Movie");

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, {}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
})

require("./models/Movie")

require("./routes/movieRoutes")(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});