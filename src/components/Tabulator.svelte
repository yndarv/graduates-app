<script>
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import 'tabulator-tables/dist/css/tabulator_bootstrap5.min.css';

	let { columns, data, handleDelete, handleUpdate, handleCreate, ...props } = $props();

	const deleteColumn = {
		field: 'delete',
		formatter: function () {
			return `<button class="btn btn-danger btn-sm">Удалить</button>`;
		},
		cellClick: async function (e, cell) {
			if (e.target.tagName === 'BUTTON') {
				const id = cell.getRow().getData().id;
				if (id) {
					try {
						await handleDelete(id.toString());
						cell.getRow().delete(); // Delete the row from Tabulator after successful deletion from Firestore
					} catch (error) {
						console.error('Error deleting row:', error);
					}
				} else {
					console.error('Invalid student ID:', id);
				}
			}
		},
		width: 100
	};

	columns = [...columns, deleteColumn];

	let table;
	function tableAction(node, { data, columns }) {
		table = new Tabulator(node, {
			data: data,
			columns: columns,
			layout: 'fitColumns',
			reactiveData: true,
			addRowPos: 'top',
			rowHeader: {
				title: '#',
				formatter: 'rownum', // Custom row numbering
				headerSort: false,
				hozAlign: 'center',
				frozen: false,
				width: 65
			},
			...props
		});

		table.on('cellEdited', function (cell) {
			const nextCell = getNextCell(cell);
			if (nextCell) {
				nextCell.edit();
			}
		});

		$effect(() => {
			table.setData(data);
		});
	}

	function getNextCell(cell) {
		const row = cell.getRow();
		const cells = row.getCells();
		const currentIndex = cells.indexOf(cell);

		// Return the next cell if available
		if (currentIndex < cells.length - 1) {
			return cells[currentIndex + 1];
		}
		return null;
	}

	function handleAddRow() {
		table
			.addRow({}, true)
			.then(async (row) => {
				const id = await handleCreate({});
				row.update({ id }); // Notify Tabulator of the data change

				console.log(row.getData());

				const cellToEdit = row.getCell('fullName');
				cellToEdit.edit();
			})
			.catch((error) => {
				console.error(error);
			});
	}
</script>

<button class="btn btn-primary btn-sm" onclick={handleAddRow}> Добавить строку </button>

<div class="table-container">
	<div id="table" use:tableAction={{ data, columns }}></div>
</div>

<style>
	.table-container {
		height: 98vh;
	}

	#table {
		height: 100%;
	}
</style>
