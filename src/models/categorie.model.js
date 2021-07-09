import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const Categorie = sequelize.define(
  'oeuvre_Categorie', {
  libelle: { type: Sequelize.STRING, allowNull: false },
},
)

Categorie.associate = function (models) {
  // associations go here
};

// create table with user model
Categorie.sync()
  .then(() => console.log('La TABLE oeuvre_Categories créée avec succès'))
  .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default Categorie;