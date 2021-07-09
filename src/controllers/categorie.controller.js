import { getAll, getById, create, update, _delete } from '../services/categorie.service.js';

export function getAllCategories(req, res, next) {
  return getAll()
    .then(oeuvre_Categorie => res.json({
      status: 200,
      args: oeuvre_Categorie,
    }))
    .catch(next);
}

export function getCategorieById(req, res, next) {
  return getById(req.params.id)
    .then(oeuvre_Categorie => res.json({
      status: 200,
      args: oeuvre_Categorie,
    }))
    .catch(next);
}


export function createCategorie(req, res, next) {
  return create(req.body, res)
    .then(() => res.json({
      texte: req.body,
      message: 'Registration successful',
      status: 201
    }))
    .catch(next);
}

export function updateCategorie(req, res, next) {
  return update(req.params.id, req.body)
    .then((texte) => res.json({
      newTexte: req.body,
      message: 'Moification successsful',
      status: 202
    }))
    .catch(next);
}

export function deleteCategorie(req, res, next) {
  return _delete(req.params.id, res)
    .then(texte => res.json({
      texte_numero: req.params.id,
      status: 203,
      message: `categorie is deleted`
    }))
    .catch(next);
}


export default {};