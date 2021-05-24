import Texte from '../models/texte.model.js';

export async function get() {
    return await Texte.findAll();
}

export function getById(id) {
    return getTexte(id);
}

export function create(req) {
    return Texte.create(req);
}

export async function update(id, params) {
    return await Texte.update(params, { where: { id: id } });
}

export async function _delete(id) {
    const texte = await getTexte(id);
    await texte.destroy();

}



// helper functions
async function getTexte(id) {
    const texte = await Texte.findByPk(id);
    if (!texte) throw 'Texte not found';
    return texte;
}

export default {}