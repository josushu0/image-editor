import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	adjustments: false,
	images: true,
	downloads: false
}

export const toolSlice = createSlice({
	name: 'tool',
	initialState,
	reducers: {
		activateAdjustments(state) {
			state.adjustments = true
			state.images = false
			state.downloads = false
			return state
		},
		activateImages(state) {
			state.adjustments = false
			state.images = true
			state.downloads = false
			return state
		},
		activateDownloads(state) {
			state.adjustments = false
			state.images = false
			state.downloads = true
			return state
		}
	}
})

export const { activateAdjustments, activateImages, activateDownloads } = toolSlice.actions

export default toolSlice.reducer
