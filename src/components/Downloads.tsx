import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { useAppSelector } from "../hooks/redux"
import { RootState } from "../store/store"

function Downloads() {
	const [downloadOption, setDownloadOption] = useState('PNG')
	const [dropdown, setDropdown] = useState(false)
	const image = useAppSelector((state: RootState) => state.image)

	const handleSelection = (selection: string) => {
		setDownloadOption(selection)
		setDropdown(false)
	}

	const handleDownload = () => {
		const img = document.createElement('img')
		img.src = image.src
		const canvas = document.createElement("canvas")
		const ctx = canvas.getContext("2d")
		if(!ctx) return
		canvas.width = img.width
		canvas.height = img.height
		ctx.filter = `brightness(${image.brightness / 100}) blur(${image.blur}px) contrast(${image.contrast / 100}) grayscale(${image.grayscale}%) invert(${image.negative}%) saturate(${image.saturation / 100}) sepia(${image.sepia}%)`
		ctx.globalAlpha = image.opacity / 100
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

		const link = document.createElement("a")
		link.download = `image-edited`
		if(downloadOption === 'JPG') {
			link.href = canvas.toDataURL("image/jpeg")
		} else {
			link.href = canvas.toDataURL("image/png")
		}
		link.click()
		link.remove()
		img.remove()
		canvas.remove()
	}

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-bold">Opciones de descarga</h1>
			<div className="flex flex-col">
				<div className={`flex border-2 border-neutral-900 transition-all ${dropdown ? 'rounded-none' : 'rounded-xl'}`}>
					<button onClick={() => handleDownload()} className="p-2 border-r-2 border-neutral-900 grow">{downloadOption}</button>
					<button onClick={() => setDropdown(!dropdown)} className="flex justify-center items-center p-2">
						<ChevronDownIcon className="h-6" />	
					</button>
				</div>
				{ dropdown &&
					<>
						<button onClick={() => handleSelection('PNG')} className="p-2 border-2 border-t-0 border-neutral-900">PNG</button>
						<button onClick={() => handleSelection('JPG')} className="p-2 border-2 border-t-0 border-neutral-900">JPG</button>
					</>
				}
			</div>
		</div>
	)
}

export default Downloads
