<template>
  <div>
	<h2>Users list</h2>
		<div class="table-responsive">
			<table class="table table-striped table-sm">
				<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Email</th>
					<th>Actions</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="(user, index) in users" :key="index">
					<td>{{user.id}}</td>
					<td>{{user.name}}</td>
					<td>{{user.email}}</td>
					<td>
						<a href="#">Edit</a> 
						-
						<a href="#">Delete</a>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
	name: 'Users',
	data() {
		return {
			users: []
		}
	},
	methods: {
		getUsers() {
			axios.get('http://127.0.0.1:8000/api/users')
				.then(res => {
					//console.log(res.data)
					this.users = res.data
				})
				.catch(error => console.log(error))
		}
	},

	created() {
		this.getUsers()
	}
}
</script>


<style scoped>

</style>
