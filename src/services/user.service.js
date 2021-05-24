import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import config from '../configs/config.js';

// authentificate : login
export async function login({ email, password }) {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.hash)))
        return {
            status: 401,
            message: "Username or password is incorrect'"
        }
        // authentication successful
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
    const userReturn = omitHash(user, token);
    return {
        status: 200,
        message: 'Connexion OK!',
        args: userReturn,
        token: token
    };
}

export function omitHash(user, ) {

    const result = {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        role: user.role,
    }
    return result
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
    return await User.create(params);
}


// update 
// *******************
export async function update(id, params) {
    const user = await getUser(id);
    // validate
    const usernameChanged = params.username && user.username !== params.username;
    if (usernameChanged && await User.findOne({ where: { username: params.username } })) {
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

// function omitHash(user) {
//   console.log('omitHash ' + user);
//   const { userWithoutHash } = user;

//   return userWithoutHash;
// }

export default {}