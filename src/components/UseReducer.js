import React, {useReducer} from 'react'


const one = () => {
	return 4 + 4
}

const initialStateOne = 0;
const initialStateTwo = {
	counter: 4,
	itemData: [
		{itemID: 1, itemName: 'apple', itemQuantity: 4, isSelected: false},
		{itemID: 2, itemName: 'pineapple', itemQuantity: 2, isSelected: true},
		{itemID: 3, itemName: 'guava', itemQuantity: 10, isSelected: false},
		{itemID: 4, itemName: 'lemon', itemQuantity: 10, isSelected: true}
	],
	total: 0
}

const reducerone = (state, action) => {
	
	switch(action) {
		case 'increment':
			return state + 1
		case 'decrement':
			if (state > 0) {
				return state - 1
			} else {
				return initialStateOne
			}
		case 'reset':
			return initialStateOne
		default:
			return state;
	}
}

const reducertwo = (state, action) => {

	switch(action.type) {
		
		case 'increment':

			return {
				counter: state.counter + 1,
			}
		case 'decrement':
			if (state.counter > 0) {
				return {counter: state.counter - 1}
			} else {
				return {counter: state.counter}
			}
		case 'reset':
			return initialStateTwo
		default:
			return state;
	}
}

function UseReducer() {
	const [count, dispatch] = useReducer(reducerone, initialStateOne);
	const [counttwo, dispatchtwo] = useReducer(reducertwo, initialStateTwo);

	return (
		<div>
			<h1 className="text-lg text-white mb-5">Use Reducer</h1>
			<div className="w-1/2 bg-green-800 w-full p-4">
				<div className="text-white text-3xl">counter: {count} </div>
				
				<div className="space-x-2 mt-3">
					<button onClick={() => dispatch('increment')} className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Increment</button>
					<button onClick={() => dispatch('decrement')} className="bg-orange-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Decrement</button>
					<button onClick={() => dispatch('reset')} className="bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Rest</button>
				</div>

			</div>

			<h1 className="text-lg text-white mb-5 mt-6">Multiple Use Reducer</h1>
			<div className="w-1/2 bg-blue-800 w-full p-4">
				<div className="text-white text-3xl">counter: {counttwo.counter} </div>
				
				<div className="space-x-2 mt-3">
					<button onClick={() => dispatchtwo({type: 'increment'})} className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Increment</button>
					<button onClick={() => dispatchtwo({type: 'decrement'})} className="bg-orange-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Decrement</button>
					<button onClick={() => dispatchtwo({type: 'reset'})} className="bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Rest</button>
				</div>

			</div>
		</div>
	)
}

export default UseReducer
