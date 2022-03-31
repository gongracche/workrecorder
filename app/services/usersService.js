const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var usersModel = require('../models').users;
var usersPasswordsModel = require('../models').users_passwords;

var usersService = {

    findAll: async function() {
        return await usersModel.findAll();
    },
    
    findById: async function(id) {
        return await usersModel.findByPk(id);
    },

    findByLoginId: async function(loginId) {
        return await usersModel.findOne({
            where: {
                login_id: loginId
            }
        })
    },

    register: async function(user) {
        return await usersModel.create({
            name: user.name,
            login_id: user.loginId
        })
    },

    update: async function(user) {
        return await usersModel.update(
            { name: user.name},
            { where: {id: user.id}}    
        )
    },

    remove: async function(user) {
        return await usersModel.destroy(
            { where: {id: user.id}}
        )
    },

    setPassword: async function(user, password) {
        const userPassword = await usersPasswordsModel.findOne({
            where: {
                [Op.and]: {
                    id: user.id,
                    password: password
                }
            }
        });
    }
}

module.exports = usersService;