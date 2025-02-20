<script>
	import Navbar from '$components/Navbar.svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { page } from '$app/stores'; // SvelteKit's page store
	let { children } = $props();

	// Determine the current page based on the route
	let currentPage = $derived($page.url.pathname.split('/')[1] || 'students');
</script>

<Navbar {currentPage} />

{@render children()}
