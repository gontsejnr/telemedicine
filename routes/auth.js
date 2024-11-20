const express = require(`express`);
const register = require(`../controllers/register`);
const login = require(`../controllers/login`);
const router = require(`./pages`);
const { isAuthenticated } = require(`../middleware/auth`);

router.post(`./signup`, register.register);
router.post(`./login`, login.login);

module.exports = router;
