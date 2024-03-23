import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
	count: number;
}

const initialState: CounterState = {
	count: 1,
};

export const counterSlice = createSlice({
	name: 'count',
	initialState,
	reducers: {
		increment: state => {
			state.count += 1;
		},
		decrement: state => {
			if (state.count > 1) {
				state.count -= 1;
			} else {
				state.count = 1;
			}
		},
	},
});

export const { decrement, increment } = counterSlice.actions;

export default counterSlice.reducer;
