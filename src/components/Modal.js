import React, { Component } from 'react'

class Modal extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			lastname: ''
		}
	}
	render() {
		const { open, id, userModal } = this.props.isModal;
		let isModal = {};

		userModal.forEach(user => {
			isModal.name = user.name;
			isModal.lastname = user.lastname
		})

		return (
			<div> { open && <div className="fixed z-10 inset-0 overflow-y-auto">
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

				<div className="fixed inset-0 transition-opacity">
					<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
				</div>

				<span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

				<div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
					<div className="sm:flex sm:items-start">
						<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
						
						</div>
						<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
						<h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
						{isModal.name}
						
						</h3>
						<div className="mt-2">
							<p className="text-sm leading-5 text-gray-500">
							{isModal.lastname}
							</p>
						</div>
						</div>
					</div>
					<div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
						<span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
						<button onClick={() => this.props.handleModal(id)} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
							Ok
						</button>
						</span>
						<span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
						<button onClick={this.props.cancelModal} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
							Cancel
						</button>
						</span>
					</div>
				</div>
			</div>
		</div> }
				
			</div>
		)
	}
}

export default Modal
