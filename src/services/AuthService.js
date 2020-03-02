import request from "superagent";

function signup(user) {
  const { REACT_APP_API_AUTH } = process.env;

  return request
    .post(`${REACT_APP_API_AUTH}/api/user`)
    .set("Content-Type", "application/json")
    .send(user);
}

export default { signup };
