import {sequelize} from '../config/db.js'
import companyModel from './company.model.js';
import userModel from "./user.model.js";
const User=userModel(sequelize);
const Company=companyModel(sequelize);
export {
    User,
    Company
}