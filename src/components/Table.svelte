<script>
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import 'tabulator-tables/dist/css/tabulator_bootstrap5.min.css';

	let { columns, data, ...props } = $props();

	function tableAction(node, { data, columns }) {
		let table = new Tabulator(node, {
			data: data,
			columns: columns,
			pagination: true,
			paginationMode: "local",
			rowpage: function (pageSize, currentRow, currentPage, totalRows, totalPages) {
				return 'Showing ' + pageSize + ' rows of ' + totalRows + ' total';
			},
			...props
		});
		return {
			update: ({ data }) => {
				table.replaceData(data);
			}
		};
	}
</script>

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
