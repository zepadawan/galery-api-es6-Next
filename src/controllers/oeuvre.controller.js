import { getAll, getById, create } from '../services/oeuvre.service.js';

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
    // console.log(req.body.image);
    // console.log(req.body.tableau);
    create(req.body.tableau, res, next)
        .then((oeuvre) => res.json({
            status: 201,
            args: oeuvre,
            meassage: 'Creation OK '
        }))
        .catch(() => res.json({
            status: 500,
            message: 'KOKOKO'
        }));

}


export default {};