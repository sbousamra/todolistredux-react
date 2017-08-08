export const signupAction = (username, password) => (
  {
    type: "SIGNUP",
    username: username,
    password: password
  }
)

export const loginAction = (username, password) => (
  {
    type: "LOGIN",
    username: username,
    password: password
  }
)