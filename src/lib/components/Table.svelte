<script>
	import { onMount } from 'svelte';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import 'tabulator-tables/dist/css/tabulator_materialize.min.css';
	import { DateTime } from 'luxon';
	import * as XLSX from 'xlsx';

	let {
		createRequest,
		patchRequest,
		deleteRequest,
		rowContextMenu,
		onMountHandler,
		addRowButton,
		exportFileName,
		...props
	} = $props();

	const rowHeader = {
		title: '#',
		field: 'rownum',
		formatter: 'rownum',
		headerSort: false,
		hozAlign: 'center',
		resizable: false,
		width: 60,
		frozen: true
	};

	const defaultRowContextMenu = [
		{
			label: "<b class='text-danger'><i class='fas fa-trash'></i> Удалить</b>",
			action: async (e, row) => {
				await deleteRequest(row.getData().id).catch((error) => {
					console.error('failed deleting row with number ', row.getData().id, error);
				});
				row.delete();
			}
		}
	];
	if (rowContextMenu) {
		defaultRowContextMenu.push(...rowContextMenu);
	}

	let table;
	let tableNode;

	onMount(() => {
		table = new Tabulator(tableNode, {
			layout: 'fitDataStretch',
			// layout: 'fitColumns',
			placeholder: 'Нет данных',
			reactiveData: true,
			rowHeader,
			rowContextMenu: defaultRowContextMenu,
			dependencies: {
				DateTime,
				XLSX
			},
			height: '90vh',
			...props
		});

		if (onMountHandler) {
			onMountHandler(table);
		}

		table.on('importImported', async (data) => {
			for (let i = 0; i < data.length; i++) {
				const rowData = data[i];
				const id = createRequest(rowData).id;
			}
		});

		table.on('cellEdited', async (cell) => {
			let result = await patchRequest(cell.getRow().getData().id, {
				[cell.getColumn().getField()]: cell.getValue().toString()
			});
		});
	});

	function handleAddRow() {
		table.addRow({}, true).then(async (row) => {
			const { id } = await createRequest({});
			row.update({ id });

			const cellToEdit = row.getCell('fullName');
			cellToEdit.edit();
		});
	}

	function handleExport(type) {
		table.download(type, exportFileName);
	}

	async function handleImport() {
		const importedData = await table.import('xlsx', ['.xlsx', '.csv', '.ods'], 'buffer');
	}
</script>

{#if addRowButton}
	<button class="btn btn-primary btn-sm" onclick={handleAddRow}>Добавить строку</button>
{/if}

<button class="btn btn-secondary btn-sm" onclick={handleExport('xlsx')}> Экспорт в Excel</button>
<button class="btn btn-secondary btn-sm" onclick={handleImport}> Импорт</button>

<div bind:this={tableNode}></div>
