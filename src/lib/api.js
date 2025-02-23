export const baseUrl = 'http://localhost:8080';

export async function loginUser(username, password) {
	const response = await fetch(`${baseUrl}/api/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify({ username, password })
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || 'Registration failed');
	} else {
		// i dont know sveltekit
		return response.headers.get('set-cookie');
	}
}
