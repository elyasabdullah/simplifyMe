import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie";

interface IintialState {
  username: string,
  _id: string,
  email: string,
  accessToken: string | null,
  isAuthenticated: boolean

}
const userInfoStorage  = localStorage.getItem('user');

let userInfo: {username: string, _id: string, email: string};

if(userInfoStorage) {
  userInfo = JSON.parse(userInfoStorage);
}else {
  userInfo = {username: "", _id: "", email: ""}
}
const initialState: IintialState = {
  username: userInfo.username || '',
  _id: userInfo._id || '',
  email:userInfo.email || '',
  accessToken: Cookies.get('accessToken') || null,
  isAuthenticated: Cookies.get('accessToken') ? true : false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
      state.username = "";
      state.email = "";
      state._id = ""
      Cookies.remove("accessToken");
    },
    setTokens: (state, action) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    },
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state._id = action.payload._id
      state.isAuthenticated = action.payload.isAuthenticated || false;
      state.accessToken = action.payload.accessToken || null;
      // Cookies.set("accessToken", action.payload.token);
    },
  }
})

export const { logout, setTokens, setUser, setAuthenticated } = userSlice.actions;
export default userSlice.reducer;
