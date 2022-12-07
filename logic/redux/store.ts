import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import popupSlice from './slices/popupSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        popup: popupSlice,
        theme: themeSlice
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;