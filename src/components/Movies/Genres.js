import React from 'react'

const Genre = (props) => {
	const genra = props.details;
	setTimeout(() => {
		// const genresDetails = genra.map((genres) => (
		// 	// <div className="text-small px-2 py-1 rounded-md border border-gray-100">{genres.name}</div>
		// ))
		genra.map(genres => 
			console.log(genres)	
		)
	},1000)

	
	return (
		<div className="mt-4 flex flex-wrap space-x-2">
			
		</div>
	)
}

export default Genre;