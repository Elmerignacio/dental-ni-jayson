const express = require('express')
const controller = require('../controller/admin_controller.js')
const route = express.Router()

route.get("/Home_page", controller.Home_page )
route.get("/Login_page", controller.Login_page)
route.get("/Register_page", controller.Register_page)


module.exports = route
