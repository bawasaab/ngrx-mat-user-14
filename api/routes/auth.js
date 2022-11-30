var express = require('express');
var router = express.Router();
const { getUserByEmail } = require('../services/users.service')

router.post('/login', async (req, res, next) => {
  const body = req.body
  const user = await getUserByEmail(body.email)
  const email = user.email
  const paswd = user.password
  if( email === body.email && paswd === body.password ) {
    res.send({
      code: 200,
      msg: 'Login Successfull',
      data: {user}
    });
  }
});

module.exports = router;
