import express from 'express'
import { loginCtrl, registerCtrl } from '../controllers/auth.js'
import { validatorRegister, validatorLogin } from '../validators/auth.js'

const authRouter = express.Router()

/**
 * http://localhost:3001/api
 * 
 * Route register new user
 * @openapi
 * /register:
 *      post:
 *          summary: Register new user
 *          description: Route for user registry
 *          responses:
 *                  '201':
 *                      description: Successfull registry
 *                  '403':
 *                      description: Validation error
 */
authRouter.post('/register', validatorRegister, registerCtrl)
/**
 * Login user
 * @openapi
 * /login:
 *    post:
 *      summary: Login user
 *      description: login user and get session token
 *      responses:
 *        '200':
 *          description: Successfull login. Returns the object stored in the collection
 *        '404':
 *          description: User does not exist.
 *        '401':
 *          description: Password invalid.
 */
authRouter.post('/login', validatorLogin, loginCtrl)

export { authRouter }