import oeuvre_Categorie from '../models/oeuvre_categorie.model.js'

// getAll
// *******************
export async function getAll() {
    return await oeuvre_Categorie.findAll();
}

// getById : getCategorieById
// *******************
export async function getById(id) {
    return await getCategoryById(id);
}

// helper functions
export async function getCategoryById(id) {
    const categorie = await oeuvre_Categorie.findByPk(id);
    if (!categorie) throw 'categorie not found';
    return categorie;
}

export default {}