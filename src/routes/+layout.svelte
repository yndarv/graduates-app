<script>
	let { children, data } = $props();
	const user = data.user;
	console.log(data.user);
</script>

<header>
	<h1>Выпускники БрГТУ</h1>
	<nav>
		<ul>
			<li><a href="/students">Студенты</a></li>
			<li><a href="/unemployed">Незанятые</a></li>
			<li><a href="/assigned">Распределённые</a></li>
			<li><a href="/reassigned">Перераспределённые</a></li>
		</ul>
		{#if data?.user}
			<h3>Авторизованы как {user.sub}</h3>
			<form method="POST" action="?/logout">
				<button type="submit">Выход</button>
			</form>
		{:else}
			<li><a href="/login">Вход</a></li>
		{/if}
		<ul></ul>
	</nav>
</header>

<main>
	{@render children()}
</main>
