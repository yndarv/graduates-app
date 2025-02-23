export function setAuthToken({ cookies, token }) {
	cookies.set('jwtToken', token, {
		httpOnly: true,
		secure: true,
		sameSite: 'Strict',
		maxAge: 60 * 60 * 24, // 1d
		path: '/'
	});
}

export function decodeJwtPayload(token) {
	try {
		const base64Url = token.split('.')[1]; // Get the payload part of the JWT
		const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Convert from Base64Url to Base64
		const jsonPayload = decodeURIComponent(
			atob(base64)
				.split('')
				.map(function (c) {
					return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
				})
				.join('')
		);

		return JSON.parse(jsonPayload);
	} catch (error) {
		console.error('Error decoding JWT:', error);
		return null;
	}
}
