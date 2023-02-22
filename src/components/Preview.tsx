import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { zoomIn, zoomOut } from "../store/slices/imageSlice"
import { RootState } from "../store/store"

function Preview() {
	const image = useAppSelector((store: RootState) => store.image)
	const dispatch = useAppDispatch()

	function handleZoomOut() {
		if (image.width === 10) return
		dispatch(zoomOut())
	}

	function handleZoomIn() {
		if (image.width === 100) return
		dispatch(zoomIn())
	}

	return (
		<main tabIndex={-1} className="max-h-screen w-full overflow-scroll relative grid place-items-center">
			{image.src &&
				<>
					<div className="my-4" style={{ maxWidth: image.width + "%" }}>
						<img
							src={image.src}
							className="w-full"
							style={{
								filter: `brightness(${image.brightness / 100}) blur(${image.blur}px) contrast(${image.contrast / 100}) grayscale(${image.grayscale}%) invert(${image.negative}%) saturate(${image.saturation / 100}) sepia(${image.sepia}%)`,
								opacity: image.opacity / 100
							}}
						/>
					</div>
					<div className="fixed bottom-4 right-4 flex gap-2 items-center rounded-xl border-2 border-neutral-900 bg-white p-1">
						<button onClick={handleZoomOut} className="p-1 rounded-xl hover:bg-neutral-200 transition-colors">
							<span className="sr-only">Acercar imagen</span>
							<MinusIcon aria-hidden="true" className="w-6 text-neutral-900" />
						</button>
						<span>Zoom</span>
						<button onClick={handleZoomIn} className="p-1 rounded-xl hover:bg-neutral-200 transition-colors">
							<span className="sr-only">Alejar imagen</span>
							<PlusIcon aria-hidden="true" className="w-6 text-neutral-900" />
						</button>
					</div>
				</>
			}
		</main>
	)
}

export default Preview
