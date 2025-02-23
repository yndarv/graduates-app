import { fail, redirect } from '@sveltejs/kit';

import { setAuthToken } from '$lib/util';
import { loginUser } from '$lib/api';

export const actions = {
	login: async ({ cookies, request }) => {
		const formData = Object.fromEntries(await request.formData());
		const username = formData.username;
		const password = formData.password;

		try {
			const token = await loginUser(username, password);

			setAuthToken({ cookies, token });

			throw redirect(302, '/');
		} catch (error) {
			throw error;
		}
	}
};
