<script>
	import Table from '$lib/components/Table.svelte';
	import { baseUrl } from '$lib/api';
	import { selectedStudentId } from '$lib/stores';
	import { onMount } from 'svelte';
	import { columns } from '$lib/columns/unemployed';
	import { createUnemployed, deleteUnemployed, updateUnemployed } from '$lib/api/unemployed';

	let onMountHandler = null;

	const studentId = $selectedStudentId;
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
		ajaxURL: `${baseUrl}/api/unemployed/all`,
		ajaxConfig: {
			method: 'GET',
			credentials: 'include'
		},
		columns,
		patchRequest: updateUnemployed,
		deleteRequest: deleteUnemployed
	};
</script>

<Table {...tableProps} {onMountHandler} />
