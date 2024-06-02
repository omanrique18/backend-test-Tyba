import { handleHttpError } from '../utils/handleError.js'
import { verifyToken } from '../utils/handleJwt.js'
import { usersModel } from '../models/users.js'
import { getProperties } from '../utils/handlePropertiesEngine.js'

const propertiesKey = getProperties()

// Middleware for session token verification
export const authMiddleware = async (req, res, next) => {
  try {

    if(!req.headers.authorization){
        handleHttpError(res, 'NEED_SESSION', 401)
        return
    }

    const token = req.headers.authorization.split(' ').pop()
    const dataToken = await verifyToken(token)

    if(!dataToken){
        handleHttpError(res, 'NOT_PAYLOAD_DATA', 401)
        return
    }

    const query = {
      [propertiesKey.id]:dataToken[propertiesKey.id]
    }

    const user = await usersModel.findOne(query)
    req.user = user

    next()
  } catch (e) {
    handleHttpError(res, 'NOT_SESSION', 401)
  }
}