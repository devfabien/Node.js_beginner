const express = require("express");

const app = express();

// register view engine

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// redirects
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});
app.get("/newBlog", (req, res) => {
  res.render("create");
});

// 404
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3007);
