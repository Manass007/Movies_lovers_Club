const mongoose = require("mongoose");
const {Schema} = mongoose;

const movieSchema = new Schema({
    name: {type: String},
    image: {type: String},
    desc: {type: String},
});
mongoose.model("Movie", movieSchema);