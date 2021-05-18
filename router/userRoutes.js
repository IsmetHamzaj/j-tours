const Router = require('express')
const userController = require('./../controllers/userControll')

Router
    .Router('/')
    .get(userController.getAllUsers)
    .post(userController.createUser)

Router
    .Router('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)


module.exports = Router