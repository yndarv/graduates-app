export const columns = [
	{
		field: 'id',
		title: 'ID',
		visible: false
	},
	{
		field: 'studentId',
		title: 'studentId',
		visible: false
	},
	{
		field: 'fullName',
		title: 'ФИО',
		sorter: 'string',
		hozAlign: 'left',
		frozen: true,
		editor: 'input',
		editorParams: {},
		headerFilter: true,
		headerFilterPlaceholder: 'поиск',
		editable: true
		// validator: 'required'
	},

	{
		field: 'profiling',
		title: 'Профиль',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'input',
		editorParams: {},
		editable: true
	},
	{
		field: 'nameOldCompany',
		title: 'Наименование прошлой компании',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'input',
		editorParams: {},
		editable: true
	},

	{
		field: 'nameCompany',
		title: 'Наименование текущей компании',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'input',
		editorParams: {},
		editable: true
	},
	{
		field: 'jobTitle',
		title: 'Должность',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'input',
		editorParams: {},
		editable: true
	}
];
