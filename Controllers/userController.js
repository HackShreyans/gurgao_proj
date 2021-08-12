const express = require("express");
const userModel = require("../Model/userModel");
const mongoose = require("mongoose");

exports.addUser = (req, res) => {
  const { username, email, password } = req.body;
  const users = new userModel({
    username,
    email,
    password
  });
  users
    .save()
    .then(() => {
      return res.status(201).json({
        message: "saved !!"
      });
    })
    .catch(e => {
      return res.status(400).json({
        message: e
      });
    });
};
exports.findUser = (req, res) => {
  userModel
    .find({})
    .then(data => {
      return res.status(200).json({ data });
    })
    .catch(e => {
      return res.status(400).json({
        message: e
      });
    });
};
