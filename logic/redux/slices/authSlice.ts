import { Preahvihear } from "@next/font/google"
import { createSlice } from "@reduxjs/toolkit"


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
  const user: string | null = window.localStorage.getItem('user')
  const parse: User = user ? JSON.parse(user) : null

  return parse
}
const user = getUserFromLocalStorage()

const initialState: InitialState = {
  user: user,
  isAuth: window.localStorage.getItem('token') ? true : false
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