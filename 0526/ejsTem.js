const express = require("express");
const app = express();
const PORT = 3000;


// "/views": Express에서 **뷰 파일(템플릿 파일)**을 찾는 디렉토리 설정 키

// "./views": 현재 실행 중인 파일 기준으로 views 폴더를 의미

app.set("view engine", "ejs");
console.log(__dirname + "/views");
app.use("/views", express.static(__dirname + "/views"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});