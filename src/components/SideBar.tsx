import { useAppSelector } from "../hooks/redux"
import { RootState } from "../store/store"
import Adjustments from "./Adjustments"
import Downloads from "./Downloads"
import Images from "./Images"

function SideBar() {
	const tool = useAppSelector((state: RootState) => state.tool)
	return (
		<aside tabIndex={-1} className="h-screen w-80 border-r-2 border-neutral-200 p-4 overflow-x-scroll">
			{ tool.adjustments &&
				<Adjustments />
			}
			{ tool.images &&
				<Images />
			}
			{ tool.downloads &&
				<Downloads />
			}
		</aside>
	)
}

export default SideBar
