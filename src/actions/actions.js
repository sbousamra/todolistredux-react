export const signupAction = {
  type: "SIGNUP"
}

export const loginAction = (twitterData) => (
  {
    type: "LOGIN",
    twitterData: twitterData
  }
)

export const logoutAction = {
  type: "LOGOUT"
}