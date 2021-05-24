
import Sequelize from 'sequelize';
import config from './config.js';



// initialze an instance of Sequelize
const sequelize = new Sequelize({
  host: '178.170.8.35',
  port: 3306,
  database: 'cbialy',
  username: 'jfp',
  password: 'Zepadawan123',
  dialect: 'mysql',
});

sequelize
  .authenticate(() => console.log('Authentif !'))
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

// module.exports = sequelize

export default sequelize
