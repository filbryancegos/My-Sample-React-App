import React, { useState, useEffect } from 'react';


function ItemDetail(match) {
	useEffect(() => {
		fetchItems();
	}, [])

	const [details, setItem] = useState({});
	const [background, setImage] = useState({});

	const fetchItems = async () => {
		//const params = match.params.id
		const data = await fetch(
			`https://fortnite-api.theapinetwork.com/item/get?id=${match.match.params.id}`
			)
		const item = await data.json();
		setItem(item.data.item)
		setImage(item.data.item.images)
		console.log(item.data)
	}
	
	return (
		<div>
			<div className="text-white">Name:<h1 className="font-weight-bold text-white">{details.name}</h1></div>
			<div className="text-white">Description<h1 className="font-weight-bold text-white">{details.description}</h1></div>
			<div className="flex justify-center mt-5">
				<img src={background.background} />
			</div>
			
		</div>
	)
}

export default ItemDetail
