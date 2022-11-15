const router = require('express').Router()
const authController = require('./controller')
const passport = require('passport')
const { decodeToken } = require('../../middlewares')
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy({ usernameField: 'email' }, authController.localStrategy))
router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.get('/me', decodeToken(), authController.me)

module.exports = router