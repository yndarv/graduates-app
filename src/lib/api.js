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
		throw new Error('Login failed');
	} else {
		const setCookie = response.headers.get('set-cookie');
		// AHHAHAHHAHAHAHAHHAHA
		// TODO: move login to the client side
		return setCookie.split(';')[0].split('=')[1];
	}
}
