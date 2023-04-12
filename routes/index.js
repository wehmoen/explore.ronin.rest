var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ronin.Rest' });
});

router.get('/sales', function(req, res, next) {
  res.render('sales', { title: 'Axie Sales' });
});

router.get('/transfers', function(req, res, next) {
  res.render('transfers', { title: 'Axie Transfers' });
});

router.get('/leaderboard', function(req, res, next) {
  res.render('leaderboard', { title: 'Origin Leaderboard' });
});

router.get("/analytics", function(req, res, next) {
    res.render("analytics", { title: "Ronin.Rest Analytics" });
})
router.get("/redirect", function(req, res, next) {
    res.render("redirect", { title: "Ronin.Rest Redirect" });
});






module.exports = router;
