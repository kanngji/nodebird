const express = require("express");

const router = express.Router();

// 일단 이부분은 무시~
router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.follwerCount = 0;
  res.locals.follwingCount = 0;
  res.locals.follwerIdList = [];
  next();
});

router.get("/profile", (req, res) => {
  res.render("profile", { title: "내 정보 - NodeBird" });
});

router.get("/join", (req, res) => {
  res.render("join", { title: "회원가입 - NodeBird" });
});

router.get("/", (req, res, next) => {
  const twits = [];
  res.render("main", {
    title: "NodeBird",
    twits,
  });
});

module.exports = router;
