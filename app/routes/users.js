var express = require('express');
var router = express.Router();
var usersService = require('../services/usersService')

/* GET users listing. */
router.get('/', function(req, res) {
  usersService.findAll()
  .then((users) => {
    res.send(JSON.stringify(users));
  });
});

router.get('/:id', function(req, res) {
  usersService.findById(req.params.id)
  .then((user) => {
    res.send(JSON.stringify(user));
  });
});

router.get('/exists/:loginId', function(req, res) {
  usersService.findByLoginId(req.params.loginId)
  .then((user) => {
    let exist = false;
    if(user != null) {
      exist = true;
    }
    res.send(exist);
  });
});

router.post('/', function(req, res) {
  usersService.register(req.body)
  .then((user) => {
    res.send(JSON.stringify(user));
  });
});

router.put('/', function(req, res) {
  usersService.update(req.body)
  .then((user) => {
    res.send(JSON.stringify(user));
  });
});

router.delete('/', function(req, res) {
  usersService.remove(req.body)
  .then((user) => {
    res.send(JSON.stringify(user));
  });
});

module.exports = router;
