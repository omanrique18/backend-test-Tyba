import dotenv from 'dotenv'
dotenv.config()

import jwt from 'jsonwebtoken'
import {getProperties} from '../utils/handlePropertiesEngine.js'

const JWT_SECRET = process.env.JWT_SECRET
console.log(JWT_SECRET)
const propertiesKey = getProperties()
/**
 * Needs user object as parameter
 * @param {*} user
 */
const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      [propertiesKey.id]: user[propertiesKey.id],
    },
    JWT_SECRET,
    {
      expiresIn: '2h',
    }
  )

  return sign
}

/**
 * Needs session token jwt as parameter
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {
  try{
    return jwt.verify(tokenJwt, JWT_SECRET)
  }catch(e){
    return null
  }
}

export { tokenSign, verifyToken }