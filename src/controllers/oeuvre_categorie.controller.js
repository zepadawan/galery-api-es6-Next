import { getAll, getById } from '../services/oeuvre_categorie.service.js';

export function getAllCategories(req, res, next) {
    getAll()
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

export default {};