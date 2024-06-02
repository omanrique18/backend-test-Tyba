import bcryptjs from 'bcryptjs'

/**
 * Needs plain password as parameter
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash
}

/**
 * Needs plain password and encrypted password as parameters
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
}

export { encrypt, compare }