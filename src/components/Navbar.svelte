<script>
	let { currentPage } = $props();
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container-fluid">
		<!-- Brand (optional) -->
		<a class="navbar-brand" href="/">Выпускники БРГТУ</a>

		<!-- Toggle button for mobile -->
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

		<!-- Navbar links -->
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a
						class="nav-link {currentPage === 'students' ? 'active' : ''}"
						href="/students"
						aria-current={currentPage === 'students' ? 'page' : undefined}
					>
						Студенты
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link {currentPage === 'working' ? 'active' : ''}"
						href="/working"
						aria-current={currentPage === 'working' ? 'page' : undefined}
					>
						Работают
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link {currentPage === 'assigned' ? 'active' : ''}"
						href="/assigned"
						aria-current={currentPage === 'assigned' ? 'page' : undefined}
					>
						Распределены
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link {currentPage === 'reassigned' ? 'active' : ''}"
						href="/reassigned"
						aria-current={currentPage === 'reassigned' ? 'page' : undefined}
					>
						Перераспределены
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	/* Optional: Add custom styles if needed */
	.navbar {
		margin-bottom: 20px;
	}
</style>
