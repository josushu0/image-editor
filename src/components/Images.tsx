import { useAppDispatch } from "../hooks/redux"
import { setSrc } from "../store/slices/imageSlice"
import { activateAdjustments } from "../store/slices/toolSlice"

function Images() {
	const dispatch = useAppDispatch()

	function loadImage(e: React.ChangeEvent<HTMLInputElement>) {
		if(!e.target.files) return
		const src = URL.createObjectURL(e.target.files[0])
		dispatch(setSrc(src))
		dispatch(activateAdjustments())
	}

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-bold">Seleccionar imagen</h1>
			<div>
				<label htmlFor="local" className="block mb-1">Imagen local</label>
				<input onChange={loadImage} type="file" accept="image/*" className="w-full transition-colors file:appearance-none file:text-sm file:px-2 file:py-2 file:rounded file:font-bold file:border-2 file:border-solid file:border-neutral-900 file:bg-transparent hover:file:bg-neutral-100" />
			</div>
		</div>
	)
}

export default Images
