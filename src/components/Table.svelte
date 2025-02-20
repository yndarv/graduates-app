<script>
	import { onMount, onDestroy } from 'svelte';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import 'tabulator-tables/dist/css/tabulator_bootstrap3.min.css';
	import 'bootstrap/dist/css/bootstrap.min.css';

	let { createRequest, updateRequest, ...props } = $props();
	let table;
	let tableNode;

	onMount(() => {
		table = new Tabulator(tableNode, {
			layout: 'fitColumns',
			placeholder: 'No data',
			reactiveData: true,
			rowHeader: {
				formatter: 'rownum',
				headerSort: false,
				hozAlign: 'center',
				resizable: false,
				width: 60,
				frozen: true
			},
			...props
		});

		table.on('cellEdited', async (cell) => {
			const nextCell = getNextCell(cell);
			if (nextCell) {
				nextCell.edit();
			}
			await updateRequest({ [cell.getColumn().getField()]: cell.getValue() });
		});
	});

	onDestroy(() => {
		if (table) {
			table.destroy();
		}
	});

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
