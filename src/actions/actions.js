export const signupAction = (
  {
    type: "SIGNUP"
  }
)

export const loginAction = (username, password) => (
  {
    type: "LOGIN",
    username: username,
    password: password
  }
)