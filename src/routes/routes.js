import authorize from '../_middleware/autorize.js';
import express from 'express';
const router = express.Router();

import { getAllUsers, getUserById, loginUser, registerUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { getAllOeuvres, getOeuvreById, createOeuvre, updateOeuvre } from '../controllers/oeuvre.controller.js';
import { getAllCategories, getCategorieById, } from '../controllers/oeuvre_categorie.controller.js'
import { renameFile, send_file_using_promise } from '../controllers/test.controller.js';
import { getAllTextes, getTexteById, createTexte, updateTexte, deleteTexte } from '../controllers/texte.controller.js';

// Users
router.get('/users/get', getAllUsers);
router.post('/users/register', registerUser);
router.post('/users/login', loginUser);
router.put('/users/:id', updateUser);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUser);

// Oeuvres
router.get('/oeuvres/get', getAllOeuvres);
router.get('/oeuvres/:id', getOeuvreById);
router.post('/oeuvres/register', createOeuvre);
router.put('/oeuvres/:id', updateOeuvre);


// Categories des oeuvres
router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategorieById);

// textes
router.get('/textes', getAllTextes);
router.get('/textes/:id', getTexteById);
router.post('/textes', createTexte);
router.put('/textes/:id', updateTexte);
router.delete('/textes/:id', deleteTexte);

// tests
router.get('/test', renameFile);
router.get('/test2', send_file_using_promise);









export default router;