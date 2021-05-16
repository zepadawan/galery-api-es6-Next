import authorize from '../_middleware/autorize.js';
import express from 'express';
const router = express.Router();

import { getAllUsers, getUserById, loginUser, registerUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { getAllOeuvres, getOeuvreById, createOeuvre } from '../controllers/oeuvre.controller.js';
import { getAllCategories, getCategorieById, } from '../controllers/oeuvre_categorie.controller.js'
// import {  } from 

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


// Categories des oeuvres
router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategorieById);




export default router;