const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A course must have a name"],
  },
  leader: {
    type: String,
    required: [true, "A course must have a name"],
  },
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
