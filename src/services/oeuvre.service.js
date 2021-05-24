import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Oeuvre from '../models/oeuvre.model.js';
import config from '../configs/config.js';


// getAll
// *******************
export async function getAll() {
    return await Oeuvre.findAll();
}

// getByID
// *******************
export async function getById(id) {
    return await getOeuvre(id);
}

// Creation d'une Oeuvre
// *******************
export async function create(req, res, next) {
    return await Oeuvre.create(req, res, next);

}

// modification d'une Oeuvre
// *******************
export async function update(aid, params) {
    return await Oeuvre.update(params, { where: { id: aid } });
}


// helper functions
async function getOeuvre(id) {
    const oeuvre = await Oeuvre.findByPk(id);
    if (!oeuvre) throw 'Oeuvre not found';
    return oeuvre;
}

export default {}