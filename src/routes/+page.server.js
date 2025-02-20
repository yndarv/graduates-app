import { tableData, tableColumns } from '$lib/data';
import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(302, '/students');

	// return { tableData, tableColumns };
}
