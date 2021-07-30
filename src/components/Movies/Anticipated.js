import React from 'react'
import TopRatedMovies from './TopRated';

const Anticipated = (props) => {
	let topList = [];
	if (props.details.length > 0) {
		topList = [...props.details];
	}
	const newTopList = topList.slice(1, 5);
	return (
		<div className="most-anticipated">
			<h2 className="text-blue-500 uppercase tracking-wide font-semibold">Most Anticipated</h2>
			{ newTopList.map(movie => 
				<div key={movie.id} className="most-anticipated-container space-y-10 mt-8">
					<div className="game flex">
						<a href="#">
							<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="game cover" className="w-16 hover:opacity-75 transition ease-in-out duration-150" />
						</a>
						<div className="ml-4">
							<a href="#" className="hover:text-gray-300">{movie.title}</a>
							<div className="text-gray-400 text-sm mt-1">{movie.release_date}</div>
							</div>
					</div>
				</div>
			) }
		</div>
	)
}

export default Anticipated