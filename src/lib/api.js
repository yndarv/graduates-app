export const baseUrl = 'http://localhost:8080';

/**
 * Handles the response from the API.
 * Throws an error if the response is not OK.
 * @param {Response} response - The fetch response object.
 * @returns {Promise<object>} - The parsed JSON data from the response.
 * @throws {Error} - Throws an error with detailed information if the response is not OK.
 */
export async function handleResponse(response) {
	if (!response.ok) {
		let errorMessage = 'An error occurred';
		try {
			// Attempt to parse the error response as JSON
			const errorData = await response.json();
			errorMessage = errorData.message || errorMessage;
		} catch (error) {
			// If the response is not JSON, use the status text
			errorMessage = response.statusText || errorMessage;
		}
		throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
	}
	return response.json();
}

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
		return setCookie.split(';')[0].split('=')[1];
	}
}
