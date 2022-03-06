const express = require("express");

const Course = require("../Models/coursesModel");

const courseRouter = express.Router();

//get all courses
const getAllcourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      status: "success",
      data: courses,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
//get a user
const getCourse = async (req, res) => {
  try {
    let { id } = req.params;
    const course = await Course.findById(id);
    res.status(200).json({
      status: "success",
      data: course,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
//created
const createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);

    res.status(200).json({
      status: "success",
      data: newCourse,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
//update
const updateCourse = async (req, res) => {
  try {
    let { id } = req.params;

    const course = await Course.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      status: "success",
      data: course,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
//delete
const deleteCourse = async (req, res) => {
  try {
    let { id } = req.params;
    const course = await Course.findByIdAndDelete(id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  getAllcourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
