import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import popupSlice from './slices/popupSlice';
import themeSlice from './slices/themeSlice';
import serviceSlice from './slices/service/serviceSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        popup: popupSlice,
        theme: themeSlice,
        service: serviceSlice
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;