
export type RegistrationData = {
  username: string;
  password: string;
  email: string;
}
export type LoginRequest = {
  email: string,
  pwd: string
}

export type UserInfo = {
  username: string,
  email: string,
  _id: string,
  accessToken?: string,
  isAuthenticated?: boolean
}