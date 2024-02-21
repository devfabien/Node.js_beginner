const express = require("express");

const app = express();

// register view engine

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "my past",
      snippet:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, voluptas.",
    },
    {
      title: "my past",
      snippet:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, voluptas.",
    },
    {
      title: "my past",
      snippet:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, voluptas.",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// redirects
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});
app.get("/newBlog", (req, res) => {
  res.render("create", { title: "Create new blog" });
});

// 404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

app.listen(3007);
