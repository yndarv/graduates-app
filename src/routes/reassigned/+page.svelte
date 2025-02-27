<script>
	import Table from '$lib/components/Table.svelte';
	import { baseUrl } from '$lib/api';
	import { selectedStudentId } from '$lib/stores';
	import { onMount } from 'svelte';
	import { columns } from '$lib/columns/reassigned';
	import { createReassigned, deleteReassigned, updateReassigned } from '$lib/api/reassigned';

	let onMountHandler = null;

	const studentId = $selectedStudentId;
	if (studentId) {
		onMountHandler = async (table) => {
			const newReassignedRowData = await createReassigned(studentId, {});
			selectedStudentId.set(null);
			table.addRow(newReassignedRowData, true).then((row) => {
				const cellToEdit = row.getCell('profiling');
				cellToEdit.edit();
			});
		};
	}

	const tableProps = {
		ajaxURL: `${baseUrl}/api/reassignments/all`,
		ajaxConfig: {
			method: 'GET',
			credentials: 'include'
		},
		columns,
		patchRequest: updateReassigned,
		deleteRequest: deleteReassigned,
		exportFileName: 'перераспределённые_экспорт.xlsx'
	};
</script>

<Table {...tableProps} {onMountHandler} />
