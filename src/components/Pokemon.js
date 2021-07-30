import React, { useState, useEffect } from 'react';

function Pokemon() {
	const [ query, setQuery ] = useState('bulbasaur');
	const [ pokemon, setPokemon ] = useState(null);

	useEffect(() => {
		fetchPokemon(query);
	}, []);

	const fetchPokemon = async (name) => {
		const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
		const pokemon = await data.json();
		setPokemon(pokemon)
		console.log(pokemon)
	}

	const searchPokemon = (event) => {
		let name = event.target.value
		setQuery(name);
		fetchPokemon(name)
	}
	
	return (
		<div>
			<div className="flex justify-end">
				<div className="w-2/4 flex justify-end  mb-8 space-x-4">
					<input onChange={(event) => searchPokemon(event)} className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></input>
					<button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">search</button>
				</div>
			</div>

			<div className="flex items-center justify-center flex-col">
					{
						pokemon && (
							<div className="info">
							<img
								src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
								width="200"
								/>
								<h2 className="text-white">{pokemon.name}</h2>
							</div>
						)
					}
				</div>
		</div>
	)
}

export default Pokemon
