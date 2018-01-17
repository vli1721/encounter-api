'use strict';

const express = require('express');
const router = express.Router();

const auth = require('../controllers/auth')
const users = require('../controllers/users')


/*
* User Routes
*/
router.route('/users')
  .post(users.createUser)
  .get(users.getAllUsers)
  .put(users.updateUser)
  .delete(users.deleteUser)

router.route('/update-location')
  .put(users.updateLocation)

router.route('/find-nearby/:userId')
.get(users.findNearby)

/*
* Auth Routes
*/
router.route('/auth/login')
  .post(auth.loginUser);

// expose routes through router object
module.exports = router;
