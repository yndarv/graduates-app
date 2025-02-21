<script>
	import Table from '$components/Table.svelte';
	import { columns } from './columns';
	import { createAssigned, updateAssigned, removeAssigned } from '$lib/api/assigned.js';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let onMountHandler;
	const baseUrl = 'http://localhost:8080/api/distributions';

	let studentId = $page.url.searchParams.get('studentId');

	// WARN: hack
	if (studentId) {
		onMountHandler = async (table) => {
			const newAssignedRowData = await createAssigned(studentId, {});
			table.addRow(newAssignedRowData, true).then((row) => {
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
		createRequest: createAssigned,
		updateRequest: updateAssigned,
		removeRequest: removeAssigned,
		onMountHandler
	};
</script>

<Table {...tableProps} />
