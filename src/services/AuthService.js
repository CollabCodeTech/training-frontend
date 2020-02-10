import request from "superagent";

async function signup(user) {
  try {
    await request
      .post("http://localhost:5001/api/user")
      .set("Content-Type", "application/json")
      .send(user);
  } catch (error) {
    console.log("Response", error.response.body);
  }
}

export default { signup };
