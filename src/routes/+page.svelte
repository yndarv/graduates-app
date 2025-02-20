<script>
	import Table from '$components/Table.svelte';
	import { columns } from './columns';
	import { createStudent, updateStudent } from '$lib/api/student';

	const baseUrl = 'http://localhost:8080/api/students';

	const tableProps = {
		columns,
		ajaxURL: `${baseUrl}/all`,
		createRequest: createStudent,
		updateRequest: updateStudent
	};
</script>

<Table {...tableProps} />
