var express = require('express');
var router = express.Router();

const { getUserById, getUserList, postUserInsert, patchUserUpdate } = require('../services/users.service')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await getUserList()
  res.send({
    code: 200,
    msg: 'User Listing',
    data: {users}
  });
});

router.get('/:id', async (req, res, next) => {
  const id = parseInt(req.params.id)
  const user = await getUserById(id)
  res.send({
    code: 200,
    msg: 'User Details',
    data: {user}
  });
});

router.post('/', async (req, res, next) => {
  const inUser = req.body
  const user = await postUserInsert(inUser)
  res.send({
    code: 200,
    msg: 'User Details',
    data: {user}
  });
});

router.patch('/:id', async (req, res, next) => {
  const id = parseInt(req.params.id)
  const inUser = req.body
  const user = await patchUserUpdate(id, inUser)
  res.send({
    code: 200,
    msg: 'User Details',
    data: {user}
  });
});

module.exports = router;
