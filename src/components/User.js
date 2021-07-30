import React, { Component } from 'react';
import Welcome from './Welcome';
import AddRecords from './AddRecords';
import Modal from './Modal';

class User extends Component {
	constructor() {
		super()
		this.state = {
			user: [
				{
					id: 1,
					name: 'Fil Bryan',
					lastname: 'Egos',
					age: 30,
					sex: 'Male'
				},
				{
					id: 2,
					name: 'Pablo',
					lastname: 'Eking',
					age: 33,
					sex: 'Male'
				},
				{
					id: 3,
					name: 'Amang',
					lastname: 'Lando',
					age: 27,
					sex: 'Male'
				},
				{
					id: 4,
					name: 'Amang',
					lastname: 'Lando',
					age: 30,
					sex: 'Male'
				},
				{
					id: 5,
					name: 'Brutos',
					lastname: 'Apang',
					age: 30,
					sex: 'Female'
				},
			],
			userModal: [],
			edit: false,
			open: false,
			id: null
		}
	}

	
	changeName = (name) => {
		this.setState({
			name: name
		})
	}

	handleDelete = (id) => {
		this.setState({
			open: !this.state.open,
			id: id,
			userModal: this.state.user.filter(item => item.id == id)
		}, () => {
			console.log(this.state)
		})
	}

	addRecords = (newrecords) => {
		newrecords.id = this.state.user.length + 1;
		this.setState({
			user: [...this.state.user, newrecords]
		})
	}

	UpdateRecords = (updatedrecords) => {
		const { id, name, lastname, age, sex } = updatedrecords;
		const { user } = this.state;

		user.filter(record => {
			if (record.id === id) {
				this.setState({
					name: record.name = name,
					lastname: record.lastname = lastname,
					age: record.age = age,
					sex: record.sex = sex
				}, () => {
				})
			}
		})
	}

	handleModal = (id) => {
		this.setState( {
			user: [...this.state.user.filter(item => item.id !== id)],
			open: !this.state.open
		})
	}

	cancelModal = () => {
		this.setState({
			open: !this.state.open
		})
	}

	render() {
		return (
			<div>
				<AddRecords  user={this.state.user} handleDelete={this.handleDelete} data={this.state} addRecords={this.addRecords} updateRecords={this.UpdateRecords} />
				<Modal  cancelModal={this.cancelModal} handleModal={this.handleModal} isModal={this.state} />
			</div>
		)
	}
}

export default User;
