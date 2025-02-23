<!-- <h2>Вход</h2> -->
<!-- <form method="POST" action="?/login"> -->
<!-- 	<input type="text" name="username" placeholder="User Name" /> -->
<!-- 	<input type="password" name="password" placeholder="Password" autocomplete="new-password" /> -->
<!-- 	<button type="submit">Войти</button> -->
<!-- </form> -->
<div class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-md-4">
			<div class="card shadow-lg p-4">
				<h3 class="text-center mb-3">Login</h3>
				<form method="POST" action="?/login">
					<div class="mb-3">
						<label for="" class="form-label">Username</label>
						<input type="text" class="form-control" name="username" required />
					</div>
					<div class="mb-3">
						<label for="" class="form-label">Password</label>
						<input type="password" class="form-control" name="password" required />
					</div>
					<button type="submit" class="btn btn-primary w-100">Login</button>
				</form>
			</div>
		</div>
	</div>
</div>
