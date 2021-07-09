import { getAll, getById, create, update, _delete } from '../services/oeuvre.service.js';

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

export function deleteOeuvre(req, res, next){
  return _delete(req.params.id, res)
  .then(oeuvre => res.json({
    oeuvre_numero: req.params.id,
      status: 203,
      message: `oeuvre is deleted`
  }))
  .catch(next);

}


export default {};