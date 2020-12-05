"use strict";

// DOM Elements
var time = document.getElementById("time"),
    greeting = document.getElementById("greeting"),
    name = document.getElementById("name"),
    focus = document.getElementById("focus"); // Options

var showAmPm = true; // Show Time

function showTime() {
  var today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds(); // Set AM or PM

  var amPm = hour >= 12 ? "PM" : "AM"; // 12hr Format

  hour = hour % 12 || 12; // Output Time

  time.innerHTML = "".concat(hour, "<span>:</span>").concat(addZero(min), "<span>:</span>").concat(addZero(sec));
  setTimeout(showTime, 1000);
} // Add Zeros


function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
} // Set Background and Greeting


function setBgGreet() {
  var today = new Date(),
      hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('images/demoMorning.jpg')";
    greeting.textContent = "Good Morning, ";
  } else if (hour >= 12 && hour <= 17) {
    // Afternoon
    document.body.style.backgroundImage = "url('images/demoAfternoon.jpg')";
    greeting.textContent = "Good Afternoon, ";
  } else if (hour >= 17 && hour <= 24) {
    // Evening
    document.body.style.backgroundImage = "url('images/demoNight.jpg')";
    greeting.textContent = "Good Evening, ";
    document.body.style.color = "white";
  }
} // Get Name


function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
} // Set Name


function setName(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
} // Get Focus


function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
} // Set Focus


function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus); // Run

showTime();
setBgGreet();
getName();
getFocus();