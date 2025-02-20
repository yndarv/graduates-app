<script>
	import Tabulator from '$components/Tabulator.svelte';
	import { columns } from './columns.js';
	import { onMount } from 'svelte';
	import { deleteStudent, readAllStudents, createStudent } from '$lib/api/student.js';

	let data = $state();
	onMount(async () => {
		data = await readAllStudents();
		console.log(data);
	});

	const tableProps = {
		columns,
		layoutColumnsOnNewData: true,
		resizableColumnGuide: true,
		handleDelete: deleteStudent,
		handleCreate: createStudent
	};
</script>

<Tabulator {...tableProps} {data} />
