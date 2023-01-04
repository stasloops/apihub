import { createSlice } from "@reduxjs/toolkit"
import { storage } from "../../helpers/localStorage"

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

const initialState: InitialState = {
  user: storage.get('user'),
  isAuth: storage.get('token') ? true : false

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