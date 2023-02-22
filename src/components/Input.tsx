import { useAppDispatch } from "../hooks/redux"

interface Props {
	name: string,
	label: string,
	min: number,
	max: number,
	value: number,
	onChange: Function
}

function Input({name, label, min, max, value, onChange}: Props) {
	const dispatch = useAppDispatch()
	return (
		<div>
			<label htmlFor="brillo" className="block">{label}</label>
			<input
				onChange={(e) => dispatch(onChange(parseFloat(e.target.value)))}
				type="range"
				name={name}
				id={name}
				min={min}
				max={max}
				step={1}
				value={value}
				className="w-full"
			/>
		</div>
	)
}

export default Input
