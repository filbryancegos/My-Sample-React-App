import React, { useContext } from 'react'
import { ThemeContext } from '../Home'

export function ToolBar2() {
	const dark = useContext(ThemeContext);

	const themeStyles = {
		backgroundColor : dark ? 'red' : 'white',
		color: dark ? 'white' : 'red',
		padding: '2rem',
		margin: '2rem'
	}

	return (
		<div>
			<h1 style={themeStyles}>SAmple2</h1>
		</div>
	)
}


