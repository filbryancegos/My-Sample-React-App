import React, { useReducer } from 'react'
import { FiChevronRight, FiChevronLeft, FiPlus, FiMinus  } from "react-icons/fi";

const initialState = {
	counter: 0,
	itemData: [
		{itemID: 1, itemName: 'apple', itemQuantity: 4, isSelected: false},
		{itemID: 2, itemName: 'pineapple', itemQuantity: 2, isSelected: true},
		{itemID: 3, itemName: 'guava', itemQuantity: 10, isSelected: false},
		{itemID: 4, itemName: 'lemon', itemQuantity: 10, isSelected: true}
	]
}

const reducer = (state, action) => {
	
	switch(action.type) {
		case 'increment':

			return {
				counter: state.counter + 1,
			}
		case 'decrement':
			console.log("amang")
			const newItems = [...state.itemData];
			newItems.forEach(item => {
				if (item.itemID == action.index) {
					item.itemQuantity > 0 ? item.itemQuantity = item.itemQuantity - 1: item.itemQuantity = 0; 
				}
			})

			console.log(newItems)


		case'onToggle':
			// const newItems = [...state.itemData];
			// newItems.forEach(item => {
			// 	console.log(item)
			// 	if (item.itemID == action.index) {
			// 		console.log(item.itemID,action.index)
			// 		item.isSelected = !item.isSelected
			// 	}
			// })

			// console.log(newItems)

			return {
				itemData: newItems
			}
			
		case 'reset':
			return initialState
		default:
			return state;
	}
}

function ShoppingReducer() {
	const [item, dispatch] = useReducer(reducer, initialState);
	const plusStyle = {
		top: '9px',
		right: '5px'
	}

	return (

		<div>
			<h1 className="text-lg text-white mb-5">Use Reducer</h1>
			<div className="w-1/2 bg-green-800 w-full p-4">
				<div className="relative">
					<div className="absolute right-0 text-lg" style={plusStyle}>
						<FiPlus />
					</div>
					<input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
				</div>

				<div className="mt-5">
					<div className="flex justify-between border-b py-4"> 
						
						<div className="flex text-white justify-center items-center">
							<div className="bg-white rounded-full h-6 w-6 flex items-center justify-center mr-2 cursor-pointer"></div>
							<span className="line-through">apple</span>
						</div>

						<div className="bg-white rounded-full p-2 flex items-center justify-center space-x-2">
							<span><FiMinus /></span>
							<span>2</span>
							<span ><FiPlus /></span>
						</div>
					</div>
				</div>

				{item.itemData && item.itemData.map((data, index) => (
					<div key={data.itemID} className="flex justify-between border-b py-4"> 
						
						<div className="flex text-white justify-center items-center">
							<div
							
							 className="bg-white rounded-full h-6 w-6 flex items-center justify-center mr-2 cursor-pointer"></div>
							<span className={ data.isSelected ? 'line-through' : '' }>{ data.itemName }</span>
						</div>

						<div className="bg-white rounded-full p-2 flex items-center justify-center space-x-2">
							<span onClick={() => dispatch({type: 'decrement', index})}><FiMinus /></span>
							<span>{ data.itemQuantity }</span>
							<span onClick={() => dispatch({type: 'increment', index})}><FiPlus /></span>
						</div>
					</div>
				))}

				<div className="flex justify-end">
					<div className="text-lg text-white mt-5">Total: <span>{ item.counter }</span></div>
				</div>

			</div>
		</div>
	)
}

export default ShoppingReducer
