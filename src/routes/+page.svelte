<script>
	import Table from '$components/Table.svelte';

	let { data } = $props();

	const tableProps = {
		data: data.tableData,
		columns: data.tableColumns,
		layout: 'fitDataFill',
        layoutColumnsOnNewData:true,
        resizableColumnGuide: true,
        placeholderHeaderFilter: "No Matching Data"

	};
</script>

<Table {...tableProps} />
