<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
		<a class="navbar-brand" href="#">Cars Maintenance</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarsExampleDefault">
			<ul class="navbar-nav mr-auto">
			<li class="nav-item">
				<router-link class="nav-link" to="/">Users </router-link>
			</li>
			<li class="nav-item">
				<router-link class="nav-link" to="/add"> New User</router-link>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Link</a>
			</li>
			</ul>
			
		</div>
	</nav>
	<main role="main" class="container">
		<router-view />
		
	</main><!-- /.container -->
  </div>
</template>

<script>


export default {
	name: 'App',
	components: {
		
	}
}
</script>

<style>
  
</style>
