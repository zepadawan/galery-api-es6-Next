import { getAll, getById, login, create, update, _delete } from '../services/user.service.js';


export function getAllUsers(req, res, next) {
    getAll()
        .then(users => res.json({
            args: users,
            status: 200
        }))
        .catch(next);
}

export function getUserById(req, res, next) {
    getById(req.params.id)
        .then(data => res.json({
            result: data
        }))
        .catch(next);
}

export function registerUser(req, res, next) {
    create(req.body)
        .then(() => res.json({
            email: req.body.email,
            message: 'Registration successful',
            status: 201
        }))
        .catch(next);
}

export function loginUser(req, res, next) {
    login(req.body)
        .then(user => res.json(user))
        .catch(next);
}

export function updateUser(req, res, next) {
    update(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(next);
}

export function deleteUser(req, res, next) {
    _delete(req.params.id)
        .then(user => res.json({
            user: user,
            status: 200,
            message: `user ${user} is deleted`
        }))
        .catch(next);
}



export default {};