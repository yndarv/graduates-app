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
		field: 'nameCompany',
		title: 'Наименование компании',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'input',
		editorParams: {},
		editable: true
	},
	{
		field: 'directionReturned',
		title: 'Направление вернули',
		sorter: 'boolean',
		hozAlign: 'center',
		editor: 'tickCross',
		formatter: 'tickCross',
		editorParams: {},
		editable: true
	},
	{
		field: 'admissionToHigherLevel',
		title: 'Доступ к более высокому уровню',
		sorter: 'boolean',
		hozAlign: 'center',
		editor: 'tickCross',
		formatter: 'tickCross',
		editorParams: {},
		editable: true
	},
	{
		field: 'companyNotified',
		title: 'Компания уведомлена',
		sorter: 'boolean',
		hozAlign: 'center',
		editor: 'tickCross',
		formatter: 'tickCross',
		editorParams: {},
		editable: true
	},
	{
		field: 'dataNotification',
		title: 'Дата уведомления',
		sorter: 'date',
		hozAlign: 'center',
		editor: 'date',
		// editorParams: {
		// 	format: 'dd.MM.yyyy'
		// },
		editorParams: {},
		editable: true
	},
	{
		field: 'conscriptionEmployment',
		title: 'Контракт на службу',
		sorter: 'boolean',
		hozAlign: 'center',
		formatter: 'tickCross',
		editor: 'tickCross',
		editorParams: {},
		editable: true
	},
	{
		field: 'servesArmy',
		title: 'Служит',
		sorter: 'boolean',
		hozAlign: 'center',
		formatter: 'tickCross',
		editor: 'tickCross',
		editorParams: {},
		editable: true
	},
	{
		field: 'paymentOfTuitionFees',
		title: 'Оплата учебных взносов',
		sorter: 'boolean',
		hozAlign: 'center',
		formatter: 'tickCross',
		editor: 'tickCross',
		editorParams: {},
		editable: true
	},
	{
		field: 'notes',
		title: 'Оплата учебных взносов',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'textarea',
		formatter: 'textarea',
		editorParams: {},
		editable: true
	}
];
