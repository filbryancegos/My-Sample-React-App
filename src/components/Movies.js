import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft  } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Anticipated from './Movies/Anticipated'
import Popular from './Movies/Popular'

function Movies() {
	const apiKey = '024a419efaa3f8862e57d7434e765ffa';
	const [ movies, setMovies ] = useState([]);
	const [ moviedetails, setMovieDetails ] = useState({});
	const [ anticipatedMovies, setAnticipatedMovies ] = useState([]);
	const [ totalpages, setTatalPages ] = useState(0);
	const [ page, setPage ] = useState(1);

	useEffect(() => {
		fetchMovies()
		fetchAnticipatedMovies()
	}, []);

	const fetchMovies = async () => {
		const movie = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
		const data = await movie.json();
		setMovies(data.results)
		setTatalPages(data.total_pages)
	}

	const fetchAnticipatedMovies = async () => {
		const apiKey = '024a419efaa3f8862e57d7434e765ffa';
		const movie = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
		const items = await movie.json()
		setAnticipatedMovies(items.results)
	}

	const handlePrevPage = () => {
		if (page >= 1) {
			setPage(prevCount => prevCount - 1)
			fetchMovies();
		}	
	}

	const handleNextPage = () => {
		if (totalpages > page ) {
			setPage(prevCount => prevCount + 1)
			fetchMovies();
		}	
	}

	const percent = {
		right: '-17px',
		bottom: '-27px'
	};

	return (
		<div>
			<div className="container mx-auto border-b-2 border-gray-800">
				<div  className="popular-movies mb-6">
					<Popular details={movies}/>
				</div>
			
				<div className="flex flex-col lg:flex-row my-10 text-left">
					<div className="recently-reviewed w-full lg:w-3/4 mr-0 lg:mr-32">
						<h2 className="text-blue-500 uppercase tracking-wide font-semibold">Recently Reviewed</h2>
						<div className="recently-reviewed-container space-y-12 mt-8">
							<div className="game bg-gray-800 rounded-lg shadow-md flex px-6 py-6">
								<div className="relative flex-none">
									<a href="#">
										<img src="https://image.tmdb.org/t/p/w500/TnOeov4w0sTtV2gqICqIxVi74V.jpg" alt="game cover" className="w-48 hover:opacity-75 transition ease-in-out duration-150" />
									</a>
									<div style={percent} className="absolute bottom-0 right-0 w-16 h-16 bg-gray-900 rounded-full" >
										<div className="text-white font-semibold text-xs flex justify-center items-center h-full">
											80%
										</div>
									</div>
								</div>
								<div className="ml-6 lg:ml-12">
									<a href="#" className="text-white block text-lg font-semibold leading-tight hover:text-gray-400 mt-4">Final Fantasy VII Remake</a>
									<div className="text-white text-gray-400 mt-1">Playstation 4</div>
									<p className="mt-6 text-gray-400 hidden lg:block">
										A spectacular re-imagining of one of the most visionary games ever, Final Fantasy VII Remake rebuilds and expands the legendary RPG for today. The first game in this project will be set in the eclectic city of Midgar and presents a fully standalone gaming experience.
									</p>
								</div>
							</div>

						</div>
					
					</div>
					<div className="most-anticipated lg:w-1/4 mt-12 lg:mt-0 text-white text-left">
							<Anticipated details={anticipatedMovies} />

							<h2 className="text-blue-500 uppercase tracking-wide font-semibold mt-12">Coming Soon</h2>
							<div className="most-anticipated-container space-y-10 mt-8">
								<div className="game flex">
									<a href="#"><img src="https://image.tmdb.org/t/p/w500/TnOeov4w0sTtV2gqICqIxVi74V.jpg" alt="game cover" className="w-16 hover:opacity-75 transition ease-in-out duration-150" /></a>
									<div className="ml-4">
										<a href="#" className="hover:text-gray-300">Cyberpunk 2077</a>
										<div className="text-gray-400 text-sm mt-1">Sept 16, 2020</div>
									</div>
								</div>
							</div>
						</div>
				</div>
			</div>

			<div className="flex items-end justify-end mt-5">
				<div onClick={handlePrevPage} className="text-white text-2xl cursor-pointer"><FiChevronLeft/></div>
				<div onClick={handleNextPage} className="text-white text-2xl cursor-pointer"><FiChevronRight/></div>
			</div>
		</div>
	)
}

export default Movies
