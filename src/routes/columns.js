export const columns = [
	{
		field: 'id',
		title: 'ID',
		sorter: 'number',
		width: 50,
		visible: false,
		hozAlign: 'center',
		frozen: true,
		editable: false
	},
	{
		field: 'fullName',
		title: 'ФИО',
		sorter: 'string',
		hozAlign: 'left',
		frozen: true,
		editor: 'input',
		editorParams: {},
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
		editorParams: {},
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
		editor: 'list',
		editorParams: {
			values: ['АСФ', 'ФЭИC', 'ФИСЭ', 'ЭФ', 'МФ'],
			verticalNavigation: 'hybrid' //navigate to new row when at the top or bottom of the selection list
		},
		sorter: 'string',
		width: 120
	},
	{
		field: 'formEducation',
		title: 'Форма образования',
		editable: true,
		sorter: 'string',
		editor: 'list',
		editorParams: {
			values: ['Бюджет', 'Платно'],
			defaultValue: 'Платно',
			emptyValue: 'Платно',
			clearable: true,
			allowEmpty: false,
			listOnEmpty: true
		}
	},
	{
		field: 'stepEducation',
		title: 'Ступень образования',
		editable: true,
		editor: 'list',
		editorParams: {
			values: ['Магистратура', 'Бакалавриат', 'Аспирантура']
		},
		sorter: 'string'
	},
	{
		field: 'yearOfGraduation',
		title: 'Год выпуска',
		sorter: 'number',
		editable: true,
		editor: 'number',
		editorParams: {
			min: 1968,
			max: new Date().getFullYear()
		},
		validator: ['min:1968', `max:${new Date().getFullYear()}`],
		hozAlign: 'center'
	}
];
