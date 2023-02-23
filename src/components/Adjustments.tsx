import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { reset, setBlur, setBrightness, setContrast, setGrayscale, setNegative, setOpacity, setSaturation, setSepia } from "../store/slices/imageSlice"
import { RootState } from "../store/store"
import Input from "./Input"

function Adjustments() {
	const image = useAppSelector((state: RootState) => state.image)
	const dispatch = useAppDispatch()
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-bold">Ajustes de imagen</h1>
			<Input name="brillo" label="Brillo" min={0} max={200} value={image.brightness} onChange={setBrightness}/>
			<Input name="difuminado" label="Difuminado" min={0} max={60} value={image.blur} onChange={setBlur}/>
			<Input name="contraste" label="Contraste" min={0} max={200} value={image.contrast} onChange={setContrast}/>
			<Input name="opacidad" label="Opacidad" min={0} max={100} value={image.opacity} onChange={setOpacity}/>
			<Input name="saturacion" label="Saturacion" min={0} max={200} value={image.saturation} onChange={setSaturation}/>
			<Input name="grises" label="Escala de grises" min={0} max={100} value={image.grayscale} onChange={setGrayscale}/>
			<Input name="negativo" label="Negativo" min={0} max={100} value={image.negative} onChange={setNegative}/>
			<Input name="sepia" label="Sepia" min={0} max={100} value={image.sepia} onChange={setSepia}/>
			<button
				onClick={() => dispatch(reset())}
				className="border-2 border-neutral-900 dark:border-neutral-100 rounded-xl p-2 flex gap-2 items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-800">
				<span>Reiniciar</span>
				<ArrowUturnLeftIcon aria-hidden="true" className="h-4" />
			</button>
		</div>
	)
}

export default Adjustments
