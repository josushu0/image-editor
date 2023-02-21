import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	adjustments: false,
	images: true
}

export const toolSlice = createSlice({
	name: 'tool',
	initialState,
	reducers: {
		activateAdjustments(state) {
			state.adjustments = true
			state.images = false
			return state
		},
		activateImages(state) {
			state.adjustments = false
			state.images = true
			return state
		}
	}
})

export const { activateAdjustments, activateImages } = toolSlice.actions

export default toolSlice.reducer
