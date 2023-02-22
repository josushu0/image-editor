import { AdjustmentsHorizontalIcon, ArrowDownTrayIcon, PhotoIcon } from "@heroicons/react/24/solid"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { activateAdjustments, activateDownloads, activateImages } from "../store/slices/toolSlice"
import { RootState } from "../store/store"

function ToolBar() {
	const activeAdjustments = useAppSelector((state: RootState) => state.tool.adjustments)
	const activeImages = useAppSelector((state: RootState) => state.tool.images)
	const activeDownloads = useAppSelector((state: RootState) => state.tool.downloads)
	const dispatch = useAppDispatch()

	return (
		<nav className="w-16 h-screen border-r-2 border-solid border-neutral-200 flex flex-col items-center gap-4 py-4 px-2">
			<img src="./favicon.svg" aria-hidden="true" className="w-10 mb-2" />
			<button
				onClick={() => dispatch(activateAdjustments())}
				className={`p-2 border-2 rounded-xl hover:bg-neutral-200 transition-colors ${activeAdjustments ? "border-neutral-900" : "border-transparent"}`}>
				<span className="sr-only">Ajustes de imagen</span>
				<AdjustmentsHorizontalIcon aria-hidden="true" className="w-6 text-neutral-900" />
			</button>
			<button
				onClick={() => dispatch(activateImages())}
				className={`p-2 border-2 rounded-xl hover:bg-neutral-200 transition-colors ${activeImages ? "border-neutral-900" : "border-transparent"}`}>
				<span className="sr-only">Seleccionar imagen</span>
				<PhotoIcon aria-hidden="true" className="w-6 text-neutral-900" />
			</button>
			<button
				onClick={() => dispatch(activateDownloads())}
				className={`p-2 border-2 rounded-xl hover:bg-neutral-200 transition-colors ${activeDownloads ? "border-neutral-900" : "border-transparent"}`}>
				<span className="sr-only">Opciones de descarga</span>
				<ArrowDownTrayIcon aria-hidden="true" className="w-6 text-neutral-900" />
			</button>
		</nav>
	)
}

export default ToolBar
