import { configureStore } from "@reduxjs/toolkit"
import toolReducer from "./slices/toolSlice"
import imageReducer from "./slices/imageSlice"

export const store = configureStore({
	reducer: {
		tool: toolReducer,
		image: imageReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
