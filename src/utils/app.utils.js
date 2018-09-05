
/**
 * Verifies if the element has a value.
 * @param {Object} el The element to be inspected.
 * @return {Boolean} True if the element has a value, false otherwise.
 */
const hasValue = (el) => {
  if (!el) {
    return false
  }

  switch (typeof el) {
    case 'string':
      return el.length === 0
    default:
      return false
  }
}

export { hasValue }
