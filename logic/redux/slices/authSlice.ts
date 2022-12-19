import { createSlice } from "@reduxjs/toolkit"
import Cookies from 'js-cookie';


interface User {
  email: string
  balance: number
  api_key: string
  services: any[]
}

interface InitialState {
  user: User | null
  isAuth: boolean
}

const getUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const user: string | null = localStorage.getItem('user')
    const parse: User = user ? JSON.parse(user) : null

    return parse
  }
}

const user = getUserFromLocalStorage()
const isAuth = Cookies.get('token') ? true : false

const initialState: InitialState = {
  user: user || null,
  isAuth: isAuth

}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload
      state.isAuth = true
    },
    resetUser(state) {
      state.user = null
      state.isAuth = false
    }
  },
})

export const { getUser, resetUser } = authSlice.actions
export default authSlice.reducer