import React, { Component } from 'react'

class Filter extends Component {
	
	render() {
		console.log(this.props)
		return (
			<div className="flex justify-end">
				<div className="w-2/4 flex justify-end  mb-8 space-x-4">
					<input onChange={(event) => this.props.searchData(event)} className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></input>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">search</button>
				</div>
			</div>
		)
	}
}

export default Filter
