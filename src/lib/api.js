const baseUrl = 'http://localhost:8080';

export async function loginUser(username, password) {
	const response = await fetch(`${baseUrl}/api/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username, password })
	});

	if (!response.ok) {
		// Handle errors, e.g., throw an error or return a specific message
		const errorData = await response.json();
		throw new Error(errorData.message || 'Registration failed');
	}

	return response.json();
}
