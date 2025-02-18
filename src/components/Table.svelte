<script>
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import 'tabulator-tables/dist/css/tabulator_bootstrap5.min.css';

	let { columns, data, ...props } = $props();

	function tableAction(node, { data, columns }) {
		const defaultProps = {
			pagination: 'local',
			paginationSize: 7,
		};
		let table = new Tabulator(node, {
			data,
			columns,
			...defaultProps,
			...props,
		});
		return {
			update: ({ data }) => {
				table.replaceData(data);
			}
		};
	}
</script>

<div use:tableAction={{ data, columns }}></div>
