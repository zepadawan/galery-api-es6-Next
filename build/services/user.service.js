// const config = require('config.json');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import config from '../configs/config.js';

// authentificate : login
export async function login({ email, password }) {
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.hash))) throw 'Username or password is incorrect';
  // authentication successful
  const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
  //  return { ...omitHash(user.get()), token };
  return {
    status: 200,
    email: email,
    token: token
  };
}

// getAll
// *******************
export async function getAll() {
  return await User.findAll();
}

// getByID
// *******************
export async function getById(id) {
  return await getUser(id);
}

// create
// *******************
export async function create(params) {
  // validate
  if (await User.findOne({ where: { email: params.email } })) {
    throw 'Username "' + params.username + '" is already taken';
  }
  // hash password
  if (params.password) {
    params.hash = await bcrypt.hash(params.password, 10);
  }
  // save user
  await User.create(params);
}

// update 
// *******************
export async function update(id, params) {
  const user = await getUser(id);
  // validate
  const usernameChanged = params.username && user.username !== params.username;
  if (usernameChanged && (await User.findOne({ where: { username: params.username } }))) {
    throw 'Username "' + params.username + '" is already taken';
  }
  // hash password if it was entered
  if (params.password) {
    params.hash = await bcrypt.hash(params.password, 10);
  }
  // copy params to user and save
  Object.assign(user, params);
  await user.save();
  return omitHash(user.get());
}

// delete
// *******************
export async function _delete(id) {
  const user = await getUser(id);
  await user.destroy();
}

// helper functions
async function getUser(id) {
  const user = await User.findByPk(id);
  if (!user) throw 'User not found';
  return user;
}

function omitHash(user) {
  const { userWithoutHash } = user;
  return userWithoutHash;
}

export default {};
//# sourceMappingURL=user.service.js.map