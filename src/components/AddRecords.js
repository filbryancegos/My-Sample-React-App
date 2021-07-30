import React, { Component } from 'react'
import Filter from './Filter';

class AddRecords extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			id: '',
			name: '',
			lastname: '',
			age: '',
			amang: '',
			sex: '',
			errors: {
				name: '',
				lastname: '',
				age: '',
				sex: ''
			},
			edit: false,
			open: false,
			search:null
		}
	}
	
	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			[event.target.name] : event.target.value
		})
		this.handelInputValidation(event)
	}

	handleSelecChange = (event) => {
		this.setState( {
			sex: event.target.value
		})
	}

	handleBlur = (event) => {
		this.handelInputValidation(event)
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if(this.validateForm(this.state.errors) && this.state.edit !== true ) {
			console.info('Valid Form')
			this.props.addRecords(this.state);
			this.handelClearInput();
		} else if (this.validateForm(this.state.errors) && this.state.edit === true) {
			console.log(this.state)
			this.props.updateRecords(this.state)
			this.handelClearInput();
		} else {
			console.error('Invalid Form')
			// let value = '';
			// for (const key in this.state.errors) {
			// 	this.checkInputs(value, key);
			// }
		}	;
	}

	validateForm = (errors) => {
		let valid = true;
		Object.values(errors).forEach(
		  // if we have an error string set valid to false
		  (val) => val.length > 0 && (valid = false)
		);
		return valid;
	  }


	handelInputValidation = (event) => {
		const { value, name } = event.target;
		this.checkInputs(value, name);
	}

	checkInputs = (value, name) => {
		let errors = this.state.errors;
		switch (name) {
			case 'name':
				errors.name = 
					value.length < 1 
					? 'full name is required'
					: '';
				break;
			case 'lastname':
				errors.lastname = 
					value.length < 1 
					? 'Last name is required'
					: '';
				break;
			case 'age':
				errors.age = 
					value.length < 1 
					? 'Age is required'
					: '';
				break;
			case 'sex':
				errors.sex = 
					value.length < 1
					? 'Sex is required'
					: '';
				break;		
			default:
				break;
		}
		this.setState({errors, [name]: value});
	}


	handelClearInput = () => {
		this.setState( {
			name: '',
			lastname: '',
			age: '',
			sex: '',
			edit: false
		})
	}

	handleEdit = (id) => {
		const { user } = this.props;
		const editUser = user.filter(user => user.id == id)
		console.log(editUser)

		editUser.forEach(user => {
			this.setState({
				id: user.id,
				name: user.name,
				lastname: user.lastname,
				sex: user.sex,
				age: user.age,
				edit: true
			}, () => {
				this.props.updateRecords(this.state);
			})
			
		})
		
	}

	searchData = (event) => {
		let keyword = event.target.value;
		this.setState({
			search:keyword
		})
	}

	render() {
		const { name, lastname, age, sex, errors } = this.state;
		const users = this.props.user;
		const userItems = users.filter(data => {
			if (this.state.search === null) {
				return data;
			} else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.lastname.toLowerCase().includes(this.state.search.toLowerCase())){
				return data
			}
		}).map((user) => 
			<tr key={user.id}>
				<td className="border px-4 py-2 text-white">{user.id}</td>
				<td className="border px-4 py-2 text-white">{user.name}</td>
				<td className="border px-4 py-2 text-white">{user.lastname}</td>
				<td className="border px-4 py-2 text-white">{user.age}</td>
				<td className="border px-4 py-2 text-white">{user.sex}</td>
				<td className="border px-4 py-2 text-white">
					<div className="flex items-center justify-end space-x-2">
						<button onClick={() => this.handleEdit(user.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">edit</button>
						<button onClick={() => this.props.handleDelete(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">delete</button>
					</div>
				</td>
			</tr>
		);
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="mb-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="col-span-1">
								<label className="text-left block text-sm font-bold mb-2 text-white" >Name</label>
								<input className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
								name="name"
								value={name}
								onChange={this.handleChange}
								onBlur={this.handleBlur}
								type="text" />
								{ errors.name.length > 0 && 
               					 <p className="text-red-500 text-xs mt-1 text-left">{errors.name}</p> }
							</div>
							<div className="col-span-1">
								<label className="text-left block text-sm font-bold mb-2 text-white" >Last name</label>
								<input className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
								name="lastname"
								value={lastname}
								onChange={this.handleChange}
								onBlur={this.handleBlur}
								type="text" />
								{ errors.lastname.length > 0 && 
               					 <p className="text-red-500 text-xs mt-1 text-left">{errors.lastname}</p> }
								
							</div>
							<div className="col-span-1">
								<label className="text-left block text-sm font-bold mb-2 text-white" >Age</label>
								<input className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
								name="age"
								value={age}
								onChange={this.handleChange}
								onBlur={this.handleBlur}
								type="text" />
								{ errors.age.length > 0 && 
               					 <p className="text-red-500 text-xs mt-1 text-left">{errors.age}</p> }
							</div>
							<div className="col-span-1">
								<label className="text-left block text-sm font-bold mb-2 text-white" >Sex</label>
								<select name="sex" value={sex} onChange={this.handleSelecChange} className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
									<option>--</option>
									<option>Male</option>
									<option>Female</option>
								</select>
								{ errors.sex.length > 0 && 
               					 <p className="text-red-500 text-xs mt-1 text-left">{errors.sex}</p> }
								
							</div>
						</div>
						<div className="mt-5 mb-10 text-left">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">submit</button>
						</div>
					</div>
				</form>

				<Filter searchData={this.searchData} />
				
				<table className="table-auto w-full">
					<thead>
						<tr>
							<th className="border px-4 py-2 text-white">ID</th>
							<th className="border px-4 py-2 text-white">Name</th>
							<th className="border px-4 py-2 text-white">Last name</th>
							<th className="border px-4 py-2 text-white">Age</th>
							<th className="border px-4 py-2 text-white">Sex</th>
							<th className="border px-4 py-2 text-white">Action</th>
						</tr>
					</thead>
					<tbody>
						{userItems}
					</tbody>
				</table>
				
			</div>
		)
	}
}

export default AddRecords
