export const columns = [
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
		field: 'address',
		title: 'Адрес',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'input',
		editorParams: {},
		frozen: false,
		headerFilter: true,
		headerFilterPlaceholder: 'поиск',
		editable: true
		// validator: 'required'
	},
	{
		field: 'telNumber',
		title: 'Телефон',
		editable: true,
		editor: 'input',
		editorParams: {},
		sorter: 'alphanum',
		// validator: 'required',
		hozAlign: 'center'
	},
	{
		field: 'speciality',
		title: 'Специальность',
		editable: true,
		editor: 'input',
		sorter: 'string',
		hozAlign: 'left'
	},
	{
		field: 'code',
		title: 'Код специальности',
		editable: true,
		editor: 'input',
		editorParams: {},
		sorter: 'alphanum',
		hozAlign: 'center'
	},
	{
		field: 'faculty',
		title: 'Факультет',
		editable: true,
		editor: 'input',
		sorter: 'string',
		width: 120
	},
	{
		field: 'formEducation',
		title: 'Форма образования',
		editable: true,
		editor: 'input',
		sorter: 'string',
		width: 120
	},
	{
		field: 'stepEducation',
		title: 'Ступень образования',
		editable: true,
		editor: 'input',
		sorter: 'string',
		hozAlign: 'left'
	},
	{
		field: 'yearOfGraduation',
		title: 'Год окончания',
		sorter: 'number',
		editable: true,
		editor: 'number',
		editorParams: {
			min: 1968,
			max: new Date().getFullYear()
		},
		validator: ['min:1968', `max:${new Date().getFullYear()}`],
		hozAlign: 'center'
	},
	{
		field: 'id',
		title: 'ID',
		sorter: 'number',
		width: 50,
		visible: false,
		hozAlign: 'center',
		frozen: true,
		editable: false
	}
];
