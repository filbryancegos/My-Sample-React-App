import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToolBar } from "./UseContext/ToolBar"
import { ToolBar2 } from "./UseContext/ToolBar2"

export const ThemeContext = React.createContext();

function Home() {
	const [ items, setItems ] = useState([]);
	const [ darktheme, setDarktheme ] = useState(true);

	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')
		const items = await data.json();
		setItems(items.data)
	}

	function setTheme () {
		setDarktheme(prevDarktheme => !prevDarktheme );
	}
	
	return (
		<ThemeContext.Provider value={darktheme}>
			<div>
				<ToolBar />
				<ToolBar2 />
				<div className="p-2 bg-blue-200 cursor-pointer text-3xl" onClick={setTheme}>toggle</div>
				<h1 className={`text-3xl ${darktheme ? 'text-white' : 'text-red-700'}`}>Home page</h1>
				{
					items.map(detail => (
						<h1 key={detail.itemId}>
							<Link to={`/${detail.itemId}`}>{detail.item.name}</Link>
						</h1>
					))
				}
			</div>
		</ThemeContext.Provider>
	)
}

export default Home
