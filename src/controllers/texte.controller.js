import {get, getById, create, update, _delete } from '../services/texte.service.js'

export function getAllTextes(req, res, next) {
    return get(req, res)
        .then((textes) => res.json({
            args: textes,
            status: 200
        }))
        .catch(next);

}

export function getTexteById(req, res, next) {
    return getById(req.params.id, res)
        .then((textes) => res.json({
            args: textes,
            status: 200
        }))
        .catch(next);
}

export function createTexte(req, res, next) {
    return create(req.body, res)
        .then(() => res.json({
            texte: req.body,
            message: 'Registration successful',
            status: 201
        }))
        .catch(next);
}

export function updateTexte(req, res, next) {
    return update(req.params.id, req.body)
        .then((texte) => res.json({
            newTexte: req.body,
            message: 'Moification successsful',
            status: 202
        }))
        .catch(next);
}

export function deleteTexte(req, res, next) {
    return _delete(req.params.id, res)
        .then(texte => res.json({
            texte_numero: req.params.id,
            status: 203,
            message: `texte is deleted`
        }))
        .catch(next);
}



export default {}