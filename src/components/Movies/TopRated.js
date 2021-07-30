import React from 'react'

const TopRatedMovies = (props) => {
	return (
		<div className="most-anticipated">
			<h4 className="text-left text-blue-600 font-semibold uppercase">Most Anticipated</h4>
		
			<div className="mt-5 flex text-left">
				<img src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" className="w-24 h-full object-cover rounded-md duration-150 ease-in-out opacity-75 hover:opacity-100" alt="" />
				<div className="text-white ml-4">
					<h4 className="font-semibold uppercase">Cyberpunk 2077</h4>
					<div>Sept 16, 2020</div>
				</div>
			</div>

			<div className="mt-5 flex text-left">
				<img src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" className="w-24 h-full object-cover rounded-md duration-150 ease-in-out opacity-75 hover:opacity-100" alt="" />
				<div className="text-white ml-4">
					<h4 className="font-semibold uppercase">Cyberpunk 2077</h4>
					<div>Sept 16, 2020</div>
				</div>
			</div>

			<div className="mt-5 flex text-left">
				<img src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" className="w-24 h-full object-cover rounded-md duration-150 ease-in-out opacity-75 hover:opacity-100" alt="" />
				<div className="text-white ml-4">
					<h4 className="font-semibold uppercase">Cyberpunk 2077</h4>
					<div>Sept 16, 2020</div>
				</div>
			</div>
		</div>
	)
}

export default TopRatedMovies