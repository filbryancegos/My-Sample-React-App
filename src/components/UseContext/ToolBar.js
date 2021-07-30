
import React from 'react';
import { ThemeContext } from '../Home'

export function ToolBar(props) {

	function themeStyles(dark) {
		return {
			backgroundColor : dark ? 'red' : 'white',
			color: dark ? 'white' : 'red',
			padding: '2rem',
			margin: '2rem'
		}
	}

	return (
		<div>
			<ThemeContext.Consumer>
				{
					darktheme => {
						return <h1 className="text-white text-5xl" style={themeStyles(darktheme)}>amang</h1>
					}
				}
			</ThemeContext.Consumer>
			
			<h1 className="text-white text-5xl">sfsd</h1>
    	</div>
	)
}
