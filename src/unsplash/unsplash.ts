import { createApi } from "unsplash-js";

export const unsplash = createApi({
	accessKey: import.meta.env.VITE_UNSPLASHED_API_KEY
})
