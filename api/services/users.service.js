let cntr = 3
const users = [
  {
    id: 1,
    first_name: 'Deepak',
    last_name: 'Bawa',
    email: 'bawa_d@ymail.com',
    password: '123456'
  },
  {
    id: 2,
    first_name: 'Kamal',
    last_name: 'Kashyap',
    email: 'kamal@ymail.com',
    password: '123456'
  }
]

const getUserList = async () => {
  return users
}

const getUserById = async (id) => {
  const users = await getUserList();
  const user = users.filter( (element) => {
    if (parseInt(element.id) === parseInt(id)) {
      return element
    }
  } )
  return user[0]
}

const getUserByEmail = async (email) => {
  const users = await getUserList();
  const user = users.filter( (element) => {
    element.email
    if (element.email === email) {
      return element
    }
  } )
  return user[0]
}

const postUserInsert = async (user) => {
  const users = await getUserList();
  const id = cntr++
  user.id = id
  users.push(user)
  return await getUserById(id)
}

const getUserIndex = async (userId) => {
  const users = await getUserList();
  const position = users.map(e => parseInt(e.id)).indexOf(parseInt(userId))
  return position
}

const patchUserUpdate = async (id, user) => {
  const userIndx = await getUserIndex(id)
  user.id = id
  users[userIndx] = user
  return await getUserById(id)
}

module.exports = {
  getUserList,
  getUserById,
  getUserByEmail,
  postUserInsert,
  patchUserUpdate
}
