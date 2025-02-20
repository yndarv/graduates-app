<script>
	import Table from '$components/Table.svelte';
	import { columns } from './columns';
	import { createStudent, updateStudent, removeStudent } from '$lib/api/student';
	import { goto } from '$app/navigation';

	const baseUrl = 'http://localhost:8080/api/students';

	const rowContextMenu = [
		{
			label: 'Добавить в...',
			menu: [
				{
					label: 'Не трудоустроен',
					action: function (e, row) {
						goto(`/unemployed?studentId=${row.getData().id}`);
					}
				},
				{
					label: 'Распределён',
					action: function (e, row) {
						goto(`/assigned?studentId=${row.getData().id}`);
					}
				},
				{
					label: 'Перераспределён',
					action: function (e, row) {
						goto(`/reassigned?studentId=${row.getData().id}`);
					}
				}
			]
		}
	];

	const tableProps = {
		columns,
		ajaxURL: `${baseUrl}/all`,
		createRequest: createStudent,
		updateRequest: updateStudent,
		removeRequest: removeStudent,
		rowContextMenu
	};
</script>

<Table {...tableProps} />
