import React, { Component } from 'react';

class Welcome extends Component {
  render() {
	const users = this.props.user;
	const userItems = users.map((user) => 
		<tr key={user.id}>
			<td className="border px-4 py-2">{user.id}</td>
			<td className="border px-4 py-2">{user.name}</td>
			<td className="border px-4 py-2">{user.lastname}</td>
			<td className="border px-4 py-2">{user.age}</td>
			<td className="border px-4 py-2">{user.sex}</td>
			<td className="border px-4 py-2">
				<div className="flex items-center justify-end space-x-2">
					<button onClick={() => this.props.handleEdit(user.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">edit</button>
					<button onClick={() => this.props.handleDelete(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">delete</button>
				</div>
			</td>
		</tr>
	);
  	return <div className="">
				<table className="table-auto w-full">
					<thead>
						<tr>
							<th className="border px-4 py-2">ID</th>
							<th className="border px-4 py-2">Name</th>
							<th className="border px-4 py-2">Last name</th>
							<th className="border px-4 py-2">Age</th>
							<th className="border px-4 py-2">Sex</th>
							<th className="border px-4 py-2">Action</th>
						</tr>
					</thead>
					<tbody>
						{userItems}
					</tbody>
				</table>
				
		</div>
  }
}

export default Welcome