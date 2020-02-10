function minLength(length, value, msgError) {
  return value.length < length && msgError;
}

export default minLength;
