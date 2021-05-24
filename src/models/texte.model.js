import Sequelize from "sequelize";
import sequelize from '../configs/db-config.js';

const Texte = sequelize.define(
    'texte', {
        page_selector: { type: Sequelize.STRING, allowNull: true },
        numero: { type: Sequelize.INTEGER, allowNull: true },
        titre: { type: Sequelize.STRING, allowNull: true },
        texte: { type: Sequelize.STRING, allowNull: true },
        image_name: { type: Sequelize.STRING, allowNull: true },
    },
)

Texte.associate = function(models) {
    // associations go here
};

// create table with user model
Texte.sync()
    .then(() => console.log('Texte table created successfully'))
    .catch(err => console.log('oooh, did you enter wrong database credentials?'));

export default Texte;