import React from 'react'
import { Link } from 'react-router-dom';


const PopularMovies = (props) => {
	const popularMovies = props.details;

	const percent = {
		right: '-17px',
		bottom: '-27px'
	};

	const text_truncate = (str, length, ending) => {
		if (length == null) {
		  length = 100;
		}
		if (ending == null) {
		  ending = '...';
		}
		if (str.length > length) {
		  return str.substring(0, length - ending.length) + ending;
		} else {
		  return str;
		}
	}; 

	return (
		<div>
			<h4 className="text-left text-yellow-600 font-bold">Popular movies</h4>
			<div  className="popular-movies-content mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
			{
				popularMovies.length > 0 && 
				popularMovies.map(movie => 
					<div key={movie.id}>
						<Link to={`/movies/${movie.id}`}>
							<div className="image-wrap relative">
								<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className=" w-full h-80 object-cover duration-150 ease-in-out opacity-75 hover:opacity-100" alt="" />
								<div style={percent} className="percent absolute w-16 h-16 text-white rounded-full bg-gray-800 flex justify-center items-center">{movie.vote_average}%</div>
							</div>
							<div className="info text-white mt-2">
								<h5 className=" text-left text-lg font-extrabold" >{movie.title}</h5>
								<div className="text-sm flex items-center">
									<span className="">{movie.release_date}</span>
								</div>
								<div className="text-left text-sm">
									<p>{text_truncate(`${movie.overview}`,50)}</p>
								</div>
							</div>
						</Link>	
					</div>
				)
			}
			</div>
			{/* <h4 className="text-left text-yellow-600 font-bold">Popular movies</h4>
			<div className="popular-movies-content mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
				<div key={movie.id}>
					<Link to={`/movies/${movie.id}`}>
						<div className="image-wrap relative">
							<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className=" w-full h-80 object-cover duration-150 ease-in-out opacity-75 hover:opacity-100" alt="" />
							<div style={percent} className="percent absolute w-16 h-16 text-white rounded-full bg-gray-800 flex justify-center items-center">{movie.vote_average}%</div>
						</div>
						<div className="info text-white mt-2">
							<h5 className=" text-left text-lg font-extrabold" >{movie.title}</h5>
							<div className="text-sm flex items-center">
								<span className="">{movie.release_date}</span>
							</div>
							<div className="text-left text-sm">
								<p>{text_truncate(`${movie.overview}`,50)}</p>
							</div>
						</div>
					</Link>	
				</div>
			</div> */}
		</div>
	)
}

export default PopularMovies