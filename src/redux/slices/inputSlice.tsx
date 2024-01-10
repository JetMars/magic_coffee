import { createSlice } from '@reduxjs/toolkit';

export interface InputState {}

const initialState: InputState[] = [];

export const inputSlice = createSlice({
	name: 'input',
	initialState,
	reducers: {},
});

export default inputSlice.reducer;
