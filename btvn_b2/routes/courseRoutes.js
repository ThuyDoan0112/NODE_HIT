const express = require("express");
const coures = require("../database/courses");
const courseController = require("../controllers/courseController");

const courseRouter = express.Router();

// const courses = JSON.parse(
//   fs.readFileSync(`${__dirname}/../database/courses.json`)
// );
//get all courses
courseRouter
  .route("/")
  .get(courseController.getAllcourses)
  .post(courseController.createCourse);

courseRouter
  .route("/:id")
  .get(courseController.getCourse)
  .put(courseController.updateCourse)
  .delete(courseController.deleteCourse);

module.exports = courseRouter;
