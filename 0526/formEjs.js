const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("form", { title: "폼 실습" });
});

app.get("/getForm", function(req, res) {
  console.log(req.query);

  res.render("result", {
    title: "Get 요청 폼 결과 확인하기",
    userInfo: req.query,
  });
});

app.post("/postForm", function(req, res) {
  console.log(req.body);
  res.render("result", {
    title: "Post 요청 폼",
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
