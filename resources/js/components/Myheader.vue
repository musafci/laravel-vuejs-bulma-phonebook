<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
	  <div class="navbar-brand">
	    <a class="navbar-item" href="https://bulma.io">
	      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28">
	    </a>

	    <div class="navbar-menu is-active">
	      	<router-link to="/home" class="navbar-item">Home</router-link>
    		<router-link to="/about" class="navbar-item">About</router-link>
	    </div>

	    <div class="navbar-burger">
	      <span></span>
	      <span></span>
	      <span></span>
	    </div>
	  </div>
	</nav>
</template>