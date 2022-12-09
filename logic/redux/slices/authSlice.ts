import { createSlice } from "@reduxjs/toolkit"


interface User {
  userId: number | null
}

interface InitialState {
  user: User
}

const initialState: InitialState = {
  user: {
    userId: null
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload
    },
    getUserId(state, action) {
      state.user.userId = action.payload
    },
    resetUser(state) {
      state.user = {userId: null}
    }
  },
})

export const { getUser, resetUser, getUserId } = authSlice.actions
export default authSlice.reducer