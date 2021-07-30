import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
	const [ items, setItems ] = useState([]);
	const [ keyword, setKeyword ] = useState('');



	useEffect(() => {
		fetchItems();
	}, []);


	const fetchItems = async () => {
		const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')
		const items = await data.json();
		setItems(items.data)
		console.log(items)
	}

	const searchData = (event) => {
		let search = event.target.value;
		setKeyword(search)
	}

	const records = items.filter(data => {
		if (keyword === '') {
			return data;
		} else  if (data.item.name.toLowerCase().includes(keyword.toLowerCase())) {
			return data;
		}
	}).map(user => (
		<tr key={user.itemId}>
			<td className="text-white text-left border px-4 py-2">{user.itemId}</td>
			<td className="text-white text-left border px-4 py-2">{user.item.name}</td>
			<td className="text-white text-left border px-4 py-2">{user.item.description}</td>
			<td className="text-white text-left border px-4 py-2">{user.item.type}</td>
			<td className="text-white text-left border px-4 py-2">{user.item.rarity}</td>
			<td className="text-white text-left border px-4 py-2">
				<div className="flex items-center justify-end space-x-2">
					<button  className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						<Link to={`/items/${user.itemId}`}>view</Link>
					</button>
				</div>
			</td>
		</tr>
	))

	

	return (
		<div>
			<h1 className="text-left text-yellow-600 text-black font-black mb-5">Item Records</h1>

			<div className="flex justify-end">
				<div className="w-2/4 flex justify-end  mb-8 space-x-4">
					<input onChange={(event) => searchData(event)} className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></input>
					<button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">search</button>
				</div>
			</div>

			<table className="table-auto w-full">
				<thead>
					<tr>
						<th className="text-white text-left border px-4 py-2">ID</th>
						<th className="text-white text-left border px-4 py-2">Name</th>
						<th className="text-white text-left border px-4 py-2">Description</th>
						<th className="text-white text-left border px-4 py-2">Type</th>
						<th className="text-white text-left border px-4 py-2">Rarity</th>
						<th className="text-white text-left border px-4 py-2">Action</th>
					</tr>
				</thead>
				<tbody>
					{records}
				</tbody>
			</table>
		</div>
	)
}

export default Home
