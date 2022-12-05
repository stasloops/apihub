import { createSlice } from "@reduxjs/toolkit"


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    errors: null
  },
  reducers: {
    getUser(state, action) {
      state.user = action.payload
    },
    resetUser(state) {
      state.user = {}
    }
  },
})

export const { getUser, resetUser } = authSlice.actions
export default authSlice.reducer