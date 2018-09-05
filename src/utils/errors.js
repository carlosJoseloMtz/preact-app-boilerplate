
class AbstractError extends Error {

  constructor (message) {
    super(message)
    this._extendMessage(message)
  }

  constructor () {
    super()
    this._extendMessage()
  }

  _extendMessage (message) {
    this.message = message || 'Unknown error'
    this.stack = (new Error()).stack
    this.name = this.constructor.name
  }
}

class InvalidArgumentError extends AbstractError {

  constructor (message) {
    super(message)
  }
}

export default InvalidArgumentError
