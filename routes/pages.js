const express = require(`express`);
const router = express.Router();
const cookieParser = require(`cookie-parser`);
const { isAuthenticated } = require(`../middleware/auth`);

router.get(``, (req, res) => {
  res.render(`index`);
});

router.get(`/signup`, (req, res) => {
  res.render(`register`);
});

router.get(`/signin`, (req, res) => {
  res.render(`login`);
});

router.get(`/logout`, (req, res) => {
  res.clearCookie(`userRegister`);
  res.redirect(`/signin`);
});

router.get(`/patient`, (req, res) => {
  res.render(`patient`);
});

router.get(`/dashboard`, isAuthenticated, (req, res) => {
  // console.log(req.patients);
  res.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.set("Pragma", "no-cache");
  res.set("expires", "0");
  res.render(`dashboard`, { patient: req.patients });
});

module.exports = router;
