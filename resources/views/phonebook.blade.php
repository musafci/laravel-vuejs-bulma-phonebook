<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue-phonebook</title>
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>

	<div id="app">
		<div class="container">

			<Myheader></Myheader>
                <router-view></router-view>
			<Myfooter></Myfooter>

		</div>	
	</div>

	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>