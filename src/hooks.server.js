import { decodeJwtPayload } from '$lib/util.js';
import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	const token = event.cookies.get('jwtToken');

	// WARN: this is crap
	if (token) {
		const user = decodeJwtPayload(token);
		if (user) {
			event.locals.user = user;
		}
	}

	const protectedRoutes = ['/students', '/unemployed', '/assigned', '/reassigned']; // Add more protected paths if needed
	const isProtected = protectedRoutes.some((route) => event.url.pathname.startsWith(route));

	if (isProtected && !event.locals.user) {
		console.warn(`Unauthorized access attempt to ${event.url.pathname}`);
		throw redirect(302, '/login');
	}
	return await resolve(event);
};
