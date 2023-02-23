import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import { Basic } from "unsplash-js/dist/methods/photos/types"
import { useAppDispatch } from "../hooks/redux"
import { setSrc } from "../store/slices/imageSlice"
import { activateAdjustments } from "../store/slices/toolSlice"
import { unsplash } from "../unsplash/unsplash"
import Unsplash from "./Unsplash"

function Images() {
	const dispatch = useAppDispatch()
	const [unsplashPhotos, setUnsplashPhotos] = useState<Basic[] | undefined>(undefined)
	const [query, setQuery] = useState('landscapes')
	const [page, setPage] = useState(1)

	const loadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return
		const src = URL.createObjectURL(e.target.files[0])
		dispatch(setSrc(src))
		dispatch(activateAdjustments())
	}

	const unsplashImages = async () => {
		const req = await unsplash.search.getPhotos({
			query: query,
			page: page
		})
		setUnsplashPhotos(req.response?.results)
	}

	useEffect(() => {
		unsplashImages()
	}, [page])

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-bold">Seleccionar imagen</h1>
			<div>
				<label htmlFor="local" className="block mb-1">Imagen local</label>
				<input onChange={loadImage} type="file" accept="image/*" className="w-full transition-colors file:appearance-none file:text-sm file:px-2 file:py-2 file:rounded-xl file:font-bold file:border-2 file:border-solid file:border-neutral-900 dark:file:border-neutral-100 file:bg-transparent hover:file:bg-neutral-200 dark:hover:file:bg-neutral-800 file:text-inherit" />
			</div>
			<div className="flex flex-col gap-4">
				<h1 className="font-bold">Buscar en <a href="https://www.unsplash.com">Unsplash</a></h1>
				<div className="flex border-2 border-neutral-900 dark:border-neutral-100 rounded-xl">
					<input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Buscar..." className="px-2 min-w-0 border-r-2 border-neutral-900 dark:border-neutral-100 bg-transparent outline-none box-shadow-none" />
					<button onClick={unsplashImages} className="transition-colors p-2 rounded-r-xl hover:bg-neutral-200 dark:hover:bg-neutral-800">
						<MagnifyingGlassIcon className="h-5" />
					</button>
				</div>
				{unsplashPhotos &&
					<>
						<Unsplash photos={unsplashPhotos} />
						<div className="flex items-center justify-between">
							<button onClick={() => setPage(page - 1)} disabled={page === 1} className="transition-colors p-2 border-2 border-neutral-900 dark:border-neutral-100 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-800">
								<ChevronLeftIcon className="h-5" />
							</button>
							<span>{page}</span>
							<button onClick={() => setPage(page + 1)} className="transition-colors p-2 border-2 border-neutral-900 dark:border-neutral-100 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-800">
								<ChevronRightIcon className="h-5" />
							</button>
						</div>
					</>
				}
			</div>
		</div>
	)
}

export default Images
