<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { page } from '$app/stores';

	let { children, data } = $props();
	const user = data.user;
	console.log(data.user);

	async function logout() {
		await fetch('/logout', {
			method: 'POST'
		});
		window.location.href = '/login';
	}
</script>

<header>
	<nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
		<a class="navbar-brand" href="/">
			<h3 class="m-0">Выпускники БрГТУ</h3>
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav me-auto">
				<li class="nav-item">
					<a class="nav-link" href="/students" class:active={$page.url.pathname === '/students'}
						>Студенты</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/unemployed" class:active={$page.url.pathname === '/unemployed'}
						>Незанятые</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/assigned" class:active={$page.url.pathname === '/assigned'}
						>Распределённые</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/reassigned" class:active={$page.url.pathname === '/reassigned'}
						>Перераспределённые</a
					>
				</li>
			</ul>
			<div class="d-flex align-items-center">
				{#if data?.user}
					<span class="me-3">Авторизованы как {user.sub}</span>
					<button type="submit" class="btn btn-outline-danger" onclick={logout}>Выход</button>
				{:else}
					<a class="btn btn-outline-primary" href="/login">Вход</a>
				{/if}
			</div>
		</div>
	</nav>
</header>

<main class="container mt-4">
	{@render children()}
</main>
