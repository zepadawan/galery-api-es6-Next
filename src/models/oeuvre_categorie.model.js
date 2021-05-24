import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const oeuvre_Categorie = sequelize.define(
    'oeuvre_Categorie', {
        libelle: { type: Sequelize.STRING, allowNull: false },
    },
)

oeuvre_Categorie.associate = function(models) {
    // associations go here
};

// create table with user model
oeuvre_Categorie.sync()
    .then(() => console.log('oeuvre_Categories table created successfully'))
    .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default oeuvre_Categorie;