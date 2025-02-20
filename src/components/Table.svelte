<script>
	import { onMount, onDestroy } from 'svelte';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import 'tabulator-tables/dist/css/tabulator_bootstrap3.min.css';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { DateTime } from 'luxon';

	let { columns, createRequest, updateRequest, removeRequest, onMountHandler, ...props } = $props();
	let table;
	let tableNode;

	const deleteColumn = {
		field: 'delete',
		title: 'Действия',
		headerSort: false,
		formatter: function () {
			return `<button class="btn btn-danger btn-sm">
                <i class="fas fa-trash"></i>
              </button>`;
		},
		cellClick: async function (e, cell) {
			if (e.target.tagName === 'BUTTON') {
				const id = cell.getRow().getData().id;
				if (id) {
					try {
						await removeRequest(id);
						cell.getRow().delete();
					} catch (error) {
						console.error('Error deleting row:', error);
					}
				} else {
					console.error('Invalid ID:', id);
				}
			}
		},
		width: 100
	};

	columns = [...columns, deleteColumn];

	onMount(() => {
		table = new Tabulator(tableNode, {
			layout: 'fitDataFill',
			columns,
			placeholder: 'Пусто',
			reactiveData: true,
			rowHeader: {
				title: '#',
				formatter: 'rownum',
				headerSort: false,
				hozAlign: 'center',
				resizable: false,
				width: 60,
				frozen: true
			},
			dependencies: {
				DateTime
			},
			...props
		});

		if (onMountHandler) {
			onMountHandler(table);
		}

		if (onRowClick) {
			table.on('rowContext', (e, row) => {
				onRowClick(row.getData());
			});
		}

		table.on('cellEdited', async (cell) => {
			await updateRequest(cell.getRow().getData().id, {
				[cell.getColumn().getField()]: cell.getValue().toString()
			});
			const nextCell = getNextCell(cell);
			if (nextCell) {
				nextCell.edit();
			}
		});
	});

	function getNextCell(cell) {
		const row = cell.getRow();
		const cells = row.getCells();
		const currentIndex = cells.indexOf(cell);

		// Return the next cell if available
		if (currentIndex < cells.length - 2) {
			return cells[currentIndex + 1];
		}
		return false;
	}

	function handleAddRow() {
		table.addRow({}, true).then(async (row) => {
			const id = await createRequest({});
			console.log(id);
			row.update({ id: id });
			console.log('rowdata ', row.getData());

			const cellToEdit = row.getCell('fullName');
			cellToEdit.edit();
		});
	}
</script>

<button class="btn btn-primary btn-sm" onclick={handleAddRow}>Добавить строку</button>
<div bind:this={tableNode}></div>
