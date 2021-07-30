import React, { useState, useEffect } from 'react';
import SingelMovieDetails from "./Movies/SingleDetails";
// import TopRatedMovies from "./Movies/TopRated";


function MovieDetails(match) {
	const apiKey = '024a419efaa3f8862e57d7434e765ffa';
	const matchId = match.match.params.id;
	const [ moviedetails, setMovieDetails ] = useState({});
	const [ id, setMovieid ] = useState(matchId);
	
	useEffect(() => {
		fetchMovies();
	}, []);

	const fetchMovies = async () => {
		const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
		const items = await movie.json();
		setMovieDetails(items);
	}



	return (
		<div>
			<div className="mt-5">
				<div className="container mx-auto recently-reviewed">
					<div className="flex mb-4">
						<SingelMovieDetails details={moviedetails}/>
						<div className="w-1/3 p-2 ">
						
							

							<div className="coming-soon mt-8 text-left">
								<h4 className="text-left text-blue-600 font-semibold uppercase">coming soon</h4>

								<div className="mt-5 flex">
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
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieDetails
