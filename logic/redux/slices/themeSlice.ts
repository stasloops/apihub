import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        activeTheme: 'black',
        variant: {
            color: '#fff',
            background: '#222',
            backgroundSecond: '#333',
            backgroundThree: '#454545'
        },
    },
    reducers: {
        toggleTheme(state, action) {
            state.activeTheme = state.activeTheme === "black" ? "white" : "black",
            state.variant = action.payload
        },
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer