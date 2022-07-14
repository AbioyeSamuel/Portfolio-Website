const block = document.querySelectorAll(".block");
window.addEventListener("load", function() {
  block.forEach(item => {
    let numElement = item.querySelector(".num");
    let num = parseInt(numElement.innerText);
    let count = 0;
    let time = 2000 / num;
    let circle = item.querySelector(".circle");


    setInterval(() => {
      if (count === num) {
        clearInterval();
      } else {
        count += 1;
        numElement.innerText = count;
      }
    }, time)

    circle.style.strokeDashoffset = 503 - (503 * (num / 100));
    let dots = item.querySelector(".dots");
    dots.style.transform = "rotate(${360 * (num / 100)}deg)";
    if (num === 100) {
      dots.style.opacity = 0;
    }
  });
});

// Add current year to the footer
window.addEventListener("load", (
    function () {
        document.getElementById("footer-text").appendChild(
            document.createTextNode(
                new Date().getFullYear()
            )
        );
    }
));


// Alternative database form data collection
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app =express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://admin-sam:test123@cluster0.gk8tj.mongodb.net/PortfolioDB");

const hiremeSchema = new mongoose.Schema({
  name: String,
  email: String,
  companyname:String,
  subject: String,
  message: String
});
const Hireme = mongoose.model("Hireme", hiremeSchema);

app.post("index.html", function(req, res){
  const hireme = new hireme({
    name: req.body.name,
    email: req.body.email,
    companyname: req.body.companyname,
    subject: req.body.subject,
    message: req.body.message
  });
  hireme.save();
});
