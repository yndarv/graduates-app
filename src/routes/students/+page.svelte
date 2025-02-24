<script>
	import Table from '$lib/components/Table.svelte';
	import { baseUrl } from '$lib/api';
	import { createStudent, deleteStudent, updateStudent } from '$lib/api/student';
	import { columns } from '$lib/columns/student';
	import { selectedStudentId } from '$lib/stores';
	import { goto } from '$app/navigation';

	const rowContextMenu = [
		{
			label: 'Добавить в...',
			menu: [
				{
					label: 'Не трудоустроенные',
					action: function (e, row) {
						selectedStudentId.set(row.getData().id);
						goto('/unemployed');
					}
				},
				{
					label: 'Распределённые',
					action: function (e, row) {
						selectedStudentId.set(row.getData().id);
						goto(`/assigned`);
					}
				},
				{
					label: 'Перераспределённые',
					action: function (e, row) {
						selectedStudentId.set(row.getData().id);
						goto(`/reassigned`);
					}
				}
			]
		}
	];

	const tableProps = {
		ajaxURL: `${baseUrl}/api/students/all`,
		ajaxConfig: {
			method: 'GET',
			credentials: 'include'
		},
		columns,
		rowContextMenu,
		addRowButton: true,
		createRequest: createStudent,
		patchRequest: updateStudent,
		deleteRequest: deleteStudent,
		exportFileName: 'студенты_экспорт.xlsx'
	};
</script>

<Table {...tableProps} />
