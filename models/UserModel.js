// struktur tabel di database

import { Sequelize } from "sequelize";

import db from "../config/Database.js"

const {DataTypes} = Sequelize;

const User = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName: true

});

export default User;

// generate fungsi yang user tidak ada di database

(async () => { 
    await db.sync();
})();
