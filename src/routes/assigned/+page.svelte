<script>
	import Table from '$lib/components/Table.svelte';
	import { baseUrl } from '$lib/api';
	import { selectedStudentId } from '$lib/stores';
	import { onMount } from 'svelte';
	import { columns } from '$lib/columns/assigned';
	import { createAssigned, deleteAssigned, updateAssigned } from '$lib/api/assigned';

	let onMountHandler = null;

	const studentId = $selectedStudentId;
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
		ajaxURL: `${baseUrl}/api/distributions/all`,
		ajaxConfig: {
			method: 'GET',
			credentials: 'include'
		},
		columns,
		patchRequest: updateAssigned,
		deleteRequest: deleteAssigned,
		exportFileName: 'распределённые_экспорт.xlsx'
	};
</script>

<Table {...tableProps} {onMountHandler} />
