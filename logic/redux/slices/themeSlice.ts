import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        activeTheme: 'white',
        variant: {
            color: '#000',
            background: '#F5F5F5',
            backgroundSecond: '#F5F5F5',
            backgroundThree: '#e5e5e5'
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