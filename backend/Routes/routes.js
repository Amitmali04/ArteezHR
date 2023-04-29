const express = require("express");
const routers = express.Router();
const contact = require("../Modals/ContactUsSchema");


routers.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body);

  const adduser = new contact({
    name,
    email,
    message,
  });

  await adduser.save();
  res.status(201).json(adduser);
  console.log(adduser);

});

module.exports = routers;
