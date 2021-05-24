import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';


const Oeuvre = sequelize.define(
    'oeuvre', {
        nom: { type: Sequelize.STRING, allowNull: false },
        id_category: { type: Sequelize.INTEGER, allowNull: true },
        nom_image: { type: Sequelize.STRING, allowNull: true },
        prix: { type: Sequelize.STRING, allowNull: true },
        description: { type: Sequelize.STRING, allowNull: true },
        dimension: { type: Sequelize.STRING, allowNull: true },
        annee_creation: { type: Sequelize.STRING, allowNull: true },
        a_vendre: { type: Sequelize.INTEGER, allowNull: true },

    },
)

Oeuvre.associate = function(models) {
    // associations go here
};

// create table with user model
Oeuvre.sync()
    .then(() => console.log('Oeuvres table created successfully'))
    .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default Oeuvre;