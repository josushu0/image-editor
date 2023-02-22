import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	brightness: 100,
	blur: 0,
	contrast: 100,
	opacity: 100,
	saturation: 100,
	grayscale: 0,
	negative: 0,
	sepia: 0,
	src: '',
	width: 80
}

export const imageSlice = createSlice({
	name: 'image',
	initialState,
	reducers: {
		setSrc(state, action) {
			state.src = action.payload
			return state
		},
		zoomIn(state) {
			state.width += 10
			return state
		},
		zoomOut(state) {
			state.width -= 10
			return state
		},
		setBrightness(state, action) {
			state.brightness = action.payload
			return state
		},
		setBlur(state, action) {
			state.blur = action.payload
			return state
		},
		setContrast(state, action) {
			state.contrast = action.payload
			return state
		},
		setOpacity(state, action) {
			state.opacity = action.payload
			return state
		},
		setSaturation(state, action) {
			state.saturation = action.payload
			return state
		},
		setGrayscale(state, action) {
			state.grayscale = action.payload
			return state
		},
		setNegative(state, action) {
			state.negative = action.payload
			return state
		},
		setSepia(state, action) {
			state.sepia = action.payload
			return state
		},
		reset(state) {
			return {
				...initialState,
				src: state.src,
				width: state.width
			}
		}
	}
})

export const {
	setSrc,
	zoomIn,
	zoomOut,
	setBrightness,
	setBlur,
	setContrast,
	setGrayscale,
	setNegative,
	setOpacity,
	setSaturation,
	setSepia,
	reset
} = imageSlice.actions

export default imageSlice.reducer
