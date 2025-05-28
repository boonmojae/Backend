const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use("/views", express.static(__dirname + "/views"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("index", { title: "폼 실습을 해봅시다" });
});

app.get("/getForm", function (req, res) {
  console.log(req.query);

  res.render("result", {
    title: "GET 요청 폼 결과 확인하기",
    userInfo: req.query,
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
