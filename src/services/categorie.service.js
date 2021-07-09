import Categorie from '../models/categorie.model.js'

// getAll
// *******************
export async function getAll() {
  return await Categorie.findAll();
}

// getById : getCategorieById
// *******************
export async function getById(id) {
  return await getCategoryById(id);
}

export function create(req) {
  return Categorie.create(req);
}

export async function update(id, params) {
  return await Categorie.update(params, { where: { id: id } });
}

export async function _delete(id) {
  const categorie = await getCategoryById(id);
  await categorie.destroy();

}

// helper functions
export async function getCategoryById(id) {
  const categorie = await Categorie.findByPk(id);
  if (!categorie) throw 'categorie not found';
  return categorie;
}




export default {}