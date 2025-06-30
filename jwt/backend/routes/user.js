const middlewareController = require('../controllers/MiddleWareController')
const UserController = require('../controllers/UserController')

const router=require('express').Router()
router.get('/',middlewareController.verifyToken, UserController.getAllUsers)
router.delete('/:id',middlewareController.verifyTokenAndAdmin, UserController.deleteUser)
module.exports=router