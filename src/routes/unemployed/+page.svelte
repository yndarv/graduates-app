<script>
	import Table from '$components/Table.svelte';
	import { columns } from './columns';
	import { createUnemployed, updateUnemployed, removeUnemployed } from '$lib/api/unemployed.js';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let onMountHandler;
	const baseUrl = 'http://localhost:8080/api/unemployed';

	let studentId = $page.url.searchParams.get('studentId');

	// WARN: hack
	if (studentId) {
		onMountHandler = async (table) => {
			const newUnemployedRowData = await createUnemployed(studentId, {});
			table.addRow(newUnemployedRowData, true).then((row) => {
				const cellToEdit = row.getCell('profiling');
				cellToEdit.edit();
			});
		};
	}

	const tableProps = {
		columns,
		// TODO: use pagination
		ajaxURL: `${baseUrl}?page=0&size=10000`,
		ajaxResponse: function (url, params, response) {
			return response.content;
		},
		createRequest: createUnemployed,
		updateRequest: updateUnemployed,
		removeRequest: removeUnemployed,
		onMountHandler
	};
</script>

<Table {...tableProps} />
