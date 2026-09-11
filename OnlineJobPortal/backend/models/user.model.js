import { DataTypes } from "sequelize"
import { hashPassword } from '../utils/common.js'
const userModel = (sequelize) => {
    return sequelize.define(
        'User',
        {
            user_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            full_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            user_type: {
                type: DataTypes.ENUM('CANDIDATE', 'RECRUITER', 'ADMIN'),
                defaultValue: 'CANDIDATE'
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: "NOT ACTIVE"
            }
        },
        {
            hooks: {
                beforeCreate: async(user, options) => {
                    const hashedPassword = await hashPassword(user.password);
                    user.password = hashedPassword;
                }
            }
        }
    )
}
export default userModel