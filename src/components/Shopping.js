import React, {useState, useEffect} from 'react'
import { FiChevronRight, FiChevronLeft, FiPlus, FiMinus  } from "react-icons/fi";

function Shopping() {

	const itemData = [
		{itemID: 1, itemName: 'apple', itemQuantity: 4, isSelected: false},
		{itemID: 2, itemName: 'pineapple', itemQuantity: 2, isSelected: true},
		{itemID: 3, itemName: 'guava', itemQuantity: 10, isSelected: false},
		{itemID: 4, itemName: 'lemon', itemQuantity: 10, isSelected: true}
	]

	const [items, setItems] = useState(itemData);
	const [newItemValue, setNewItems] = useState('');
	const [total, setTotal] = useState(10);

	useEffect(() => {
		calculateAmount();
	}, []);

	const onToggle = (id) => {
		const newItems = [...items];
		newItems.forEach(item => {
			if (item.itemID == id) {
				item.isSelected = !item.isSelected
			}
		})
		setItems(newItems)
	}

	const handleInput = (e) => {
		setNewItems(e.target.value)
	}

	const handleClick = () => {
		const newItem = {
			itemID: items.length + 1,
			itemName: newItemValue,
			itemQuantity: 4,
			isSelected: false
		}

		const newItems = [...items, newItem ];

		setItems(newItems)
		calculateAmount();
	}

	const calculateAmount = () => {
		const itemTotal = items.reduce((accumulator, item) => {
			return accumulator + item.itemQuantity;
		}, 0)
		setTotal(itemTotal);
	}

	const handleDecrement = (id) => {
		const newItems = [...items]
		newItems.forEach(item => {
			if (item.itemID == id) {
				item.itemQuantity > 0 ? item.itemQuantity = item.itemQuantity - 1: item.itemQuantity = 0; 
			}
		})

		setItems(newItems);
		calculateAmount();
	}

	const handleIncrement = (id) => {
		const newItems = [...items];

		newItems.forEach(item => {
			if (item.itemID == id) {
				item.itemQuantity = item.itemQuantity + 1;
			}
		})

		setItems(newItems);
		calculateAmount();
	}

	const plusStyle = {
		top: "9px",
    	right: "5px"
	}

	return (
		<div>
			<h1 className="text-lg text-white mb-5">Shopping List</h1>
			<div className="w-1/2 bg-orange-700 w-full p-4">
				<div className="relative">
					<div onClick={() => handleClick()} style={plusStyle} className="absolute right-0 text-lg">
						<FiPlus />
					</div>
					<input value={newItemValue} onChange={(e) => handleInput(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
				</div>
				<div className="mt-5">

					{items.length && (
						items.map(item => (
							<div key={item.itemID} className="flex justify-between border-b py-4">
								<div className="flex text-white justify-center items-center">
									<div  
									onClick={() => onToggle(item.itemID)}
									className={`rounded-full h-6 w-6 flex items-center justify-center mr-2 cursor-pointer ${item.isSelected ? 'bg-black' : 'bg-white'}`}></div>
									<span className={`${item.isSelected ? 'line-through': ''}`}>{item.itemName}</span>
								</div>
								<div className="bg-white rounded-full p-2 flex items-center justify-center space-x-2">
									<span onClick={() => handleDecrement(item.itemID)}><FiMinus /></span>
									<span>{item.itemQuantity}</span>
									<span onClick={() => handleIncrement(item.itemID)}><FiPlus /></span>
								</div>
							</div>
						))
					)}
				</div>
				<div className="flex justify-end">
					<div className="text-lg text-white mt-5">Total: <span>{total}</span></div>
				</div>
			</div>

		</div>
	)
}

export default Shopping
