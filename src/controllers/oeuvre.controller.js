import { getAll, getById, create, update } from '../services/oeuvre.service.js';

export async function getAllOeuvres(req, res, next) {
  return getAll()
    .then(oeuvres => res.json({
      status: 200,
      args: oeuvres,
    }))
    .catch(next);
}


export function getOeuvreById(req, res, next) {
  return getById(req.params.id)
    .then((oeuvre) => res.json({
      status: 200,
      args: oeuvre,
    }))
    .catch(next);
}


export function createOeuvre(req, res, next) {
  create(req.body, res, next)
    .then((oeuvre) => res.json({
      status: 201,
      args: oeuvre,
      meassage: 'Creation OK '
    }))
    .catch((err) => res.json({
      status: 500,
      message: err,
      err: err

    }));

}

export function updateOeuvre(req, res, next) {
  return update(req.params.id, req.body)
    .then(() => {
      res.json({
        status: 202,
        message: 'Update OK !'
      })
    })
    .catch(next);
}


export default {};