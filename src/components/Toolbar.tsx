import { AdjustmentsHorizontalIcon, PhotoIcon } from "@heroicons/react/24/solid"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { activateAdjustments, activateImages } from "../store/slices/toolSlice"
import { RootState } from "../store/store"

function ToolBar() {
	const activeAdjustments = useAppSelector((state: RootState) => state.tool.adjustments)
	const activeImages = useAppSelector((state: RootState) => state.tool.images)
	const dispatch = useAppDispatch()
	return (
		<nav className="bg-neutral-50 w-16 h-screen border-r-2 border-solid border-neutral-200 flex flex-col items-center gap-4 py-4">
			<img src="./favicon.svg" className="w-10 mb-2" />
			<button
				onClick={() => dispatch(activateAdjustments())}
				className={`p-2 border-2 rounded-xl ${activeAdjustments ? "border-neutral-900" : "border-transparent"}`}>
				<AdjustmentsHorizontalIcon className="w-6 text-neutral-900" />
			</button>
			<button
				onClick={() => dispatch(activateImages())}
				className={`p-2 border-2 rounded-xl ${activeImages ? "border-neutral-900" : "border-transparent"}`}>
				<PhotoIcon className="w-6 text-neutral-900" />
			</button>
		</nav>
	)
}

export default ToolBar
