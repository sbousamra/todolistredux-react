export const signupAction = function (username, password) {
  return {
    type: "SIGNUP",
    username: username,
    password: password
  }
}