import { hasValue } from '../utils/app.utils.js'


/**
 * Authenticates a user via username and password.
 * @param {String} username User to be authenticated.
 * @param {String} password Plain password for the user.
 * @return {Promise} The authentication token to be used and a few details on the user's info.
 */
const authenticate = async ({ username, password }) => {
  if (!hasValue(username) || !hasValue(password)) {
    throw new InvalidArgumentError('Username and password are invalid')
  }

  // TODO: make the actual request
  return {
      token: 'the-token',
      user: {
        name: 'someone',
        id: 'user-id-1'
      }
    }
}

export { authenticate }
