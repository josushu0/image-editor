import { useAppSelector } from "../hooks/redux"
import { RootState } from "../store/store"
import Adjustments from "./Adjustments"
import Images from "./Images"

function SideBar() {
	const activeAdjustments = useAppSelector((state: RootState) => state.tool.adjustments)
	const activeImages = useAppSelector((state: RootState) => state.tool.images)
	return (
		<aside tabIndex={-1} className="h-screen w-80 border-r-2 border-neutral-200 p-4 overflow-x-scroll">
			{ activeAdjustments &&
				<Adjustments />
			}
			{ activeImages &&
				<Images />
			}
		</aside>
	)
}

export default SideBar
