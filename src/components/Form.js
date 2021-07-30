

import React, {useReducer, useState} from 'react'
import { useForm } from './UseForm'

const initialstate = {
	firstCounter: 0
}
const reducer = (state, action) => {
	switch(action.type) {
		case 'increment':
			return {...state, firstCounter: state.firstCounter + action.value}
		case 'decrement':
			if (state.firstCounter > 1) {
				return {...state, firstCounter: state.firstCounter - action.value};
			}
			
		case 'reset':
			return {firstCounter: 0};;
		default:
			return state;
			break;
	}
}

const inputValues = () => {
	return ({
		firstname: '',
		lastname: '',
		email: '',
		password: ''
	})
}
function Form() {
	const [count, dispatch] = useReducer(reducer, initialstate);

	const [values, handleChange] = useForm(inputValues)

	const handleSubmit = (e) => {
		e.preventDefault();
	}
	return (
		<div>
			<div className="flex flex-wrap -mx-3 mb-6 ">
				<div className="w-full md:w-1/2 px-6 mb-6 md:mb-0 mx-auto bg-orange-400 rounded-lg py-6">
					<form onSubmit={handleSubmit}>
						<div>
							<label className="text-left text-white block uppercase tracking-wide text-xs font-bold mb-2">First Name</label>
							<input 
							name="firstname"  
							value={values.firstname} 
							onChange={handleChange}
							className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder=""/>
						</div>
						 <div>
							<label className="text-left text-white block uppercase tracking-wide text-xs font-bold mb-2">Last Name</label>
							<input 
							name="lastname"
							value={values.lastname}
							onChange={handleChange}   
							className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder=""/>
						</div>
						<div>
							<label className="text-left text-white block uppercase tracking-wide text-xs font-bold mb-2">Email Address</label>
							<input  
							name="email"
							value={values.email} 
							onChange={handleChange} 
							className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" placeholder=""/>
						</div>
						<div>
							<label className="text-left text-white block uppercase tracking-wide text-xs font-bold mb-2">Password</label>
							<input 
							name="password"
							value={values.password} 
							onChange={handleChange} 
							className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="password" placeholder=""/>
						</div>
						<div className="flex justify-end mt-6">
							<button type="submit" className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Submit</button>
						</div>
					</form>
				</div>
				<div>
				<div className="text-white uppercase">Count: {count.firstCounter}</div>
					<div className="space-x-10 mt-8">
						<button className="p-2 rounded-lg bg-blue-300" onClick={() => dispatch({type: 'increment', value: 23})}>Increment</button>
						<button className="p-2 rounded-lg bg-orange-200" onClick={() => dispatch({type: 'decrement', value: 2})}>Decrement</button>
						<button className="p-2 rounded-lg bg-gray-300" onClick={() => dispatch({type: 'reset', value: 0})}>Reset</button>
					</div>
				</div>
			</div>
		</div>
	)
}


export default  Form
