import request from "superagent";

function signup(user, callback) {
  return request
    .post("http://localhost:5001/api/user")
    .set("Content-Type", "application/json")
    .send(user);
}

export default { signup };
