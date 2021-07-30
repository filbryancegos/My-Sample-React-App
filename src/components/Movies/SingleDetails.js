import React from 'react'

const SingelMovieDetails = (props) => {
	const {poster_path, tagline, title, overview, genres } = props.details;
	return (
		<div className="w-2/3 p-2 ">
			<h4 className="text-left text-blue-600 font-semibold uppercase">Movie Details</h4>

			<div className="grid grid-cols-3 gap-4 mt-5 reveiwed-box bg-gray-800 rounded-lg p-8 mr-16">
				<div className="relative col-span-1" >
					<img src={`https://image.tmdb.org/t/p/original${poster_path}`} className="w-60 h-80 object-cover rounded-md duration-150 ease-in-out opacity-75 hover:opacity-100" alt="" />
				</div>
				
				<div className="text-white col-span-2">
					<h4 className="text-left font-semibold uppercase">{title}</h4>
					<div className="text-left">{tagline}</div>
					<div className="text-left mt-5">
						<div>{overview}</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default SingelMovieDetails;