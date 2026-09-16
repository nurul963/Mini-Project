import {sequelize} from '../config/db.js'
import jobCategoryModel from './category.model.js';
import companyModel from './company.model.js';
import jobModel from './job.model.js';
import recruiterModel from './recruiter.js';
import userModel from "./user.model.js";
const User=userModel(sequelize);
const Company=companyModel(sequelize);
const JobCategory=jobCategoryModel(sequelize);
const Job=jobModel(sequelize);
const Recruiter=recruiterModel(sequelize);
//recruiter and user 1:1
User.hasOne(Recruiter,{
    foreignKey:'recruiter_id'
});
Recruiter.belongsTo(User,{foreignKey:'recruiter_id'});
// campany and recruiter 1:M
Company.hasMany(Recruiter,{foreignKey:'company_id'})
Recruiter.belongsTo(Company,{foreignKey:'company_id'});
JobCategory.hasMany(Job,{foreignKey:'category_id'});
Company.hasMany(Job,{foreignKey:'company_id'});
User.hasMany(Job,{foreignKey:'recruiter_id'});
Job.belongsTo(JobCategory,{foreignKey:'category_id'});
Job.belongsTo(Company,{foreignKey:'company_id'});
Job.belongsTo(User,{foreignKey:'recruiter_id'});
export {
    User,
    Company,
    JobCategory,
    Job,
    Recruiter
}