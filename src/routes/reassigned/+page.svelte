<script>
	import Table from '$components/Table.svelte';
	import { columns } from './columns';
	import { createReassigned, updateReassigned, removeReassigned } from '$lib/api/reassigned.js';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let onMountHandler;
	const baseUrl = 'http://localhost:8080/api/reassignments';

	let studentId = $page.url.searchParams.get('studentId');

	// WARN: hack
	if (studentId) {
		onMountHandler = async (table) => {
			const newReassignedRowData = await createReassigned(studentId, {});
			table.addRow(newReassignedRowData, true).then((row) => {
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
		createRequest: createReassigned,
		updateRequest: updateReassigned,
		removeRequest: removeReassigned,
		onMountHandler
	};
</script>

<Table {...tableProps} />
