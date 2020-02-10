function isEmail(value, msgError) {
  return !/\S+@\S+\.\S+/.test(value) && msgError;
}

export default isEmail;
