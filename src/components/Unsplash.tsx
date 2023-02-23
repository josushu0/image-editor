import { useDispatch } from "react-redux"
import { Basic } from "unsplash-js/dist/methods/photos/types"
import { setSrc } from "../store/slices/imageSlice"

interface Props {
	photos: Basic[]
}

function Unsplash({ photos }: Props) {
	const dispatch = useDispatch()

	return (
		<div className="flex flex-col gap-2">
			{photos.map((photo) =>
				<button key={photo.id} onClick={() => dispatch(setSrc(photo.urls.regular))}>
					<img src={photo.urls.small} alt={photo.alt_description || "Unsplashed"} />
				</button>
			)}
		</div>
	)
}

export default Unsplash
