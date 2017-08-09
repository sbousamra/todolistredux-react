export const signupAction = {
  type: "SIGNUP"
}

export const loginAction = (twitterData, username) => (
  {
    type: "LOGIN",
    username: username,
    twitterData: twitterData
  }
)

export const logoutAction = {
  type: "LOGOUT"
}