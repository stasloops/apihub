import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import serviceSlice from './slices/service/serviceSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		service: serviceSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
