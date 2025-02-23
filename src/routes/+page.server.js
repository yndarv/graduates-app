import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const user = locals.user;
	// There is no 'home' page.
	// WARN: mayber return wont work with redirect.
	redirect(307, '/students');
	return { user };
};

export const actions = {
	logout: async ({ cookies }) => {
		cookies.delete('token', { path: '/' });
		throw redirect(302, '/login');
	}
};
