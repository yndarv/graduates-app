<div class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-md-4">
			<div class="card shadow-lg p-4">
				<h3 class="text-center mb-3">Вход</h3>
				<form method="POST" action="?/login">
					<div class="mb-3">
						<label for="" class="form-label">Имя пользователя</label>
						<input type="text" class="form-control" name="username" required />
					</div>
					<div class="mb-3">
						<label for="" class="form-label">Пароль</label>
						<input type="password" class="form-control" name="password" required />
					</div>
					<button type="submit" class="btn btn-primary w-100">Войти</button>
				</form>
			</div>
		</div>
	</div>
</div>
