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
		field: 'nameCompanyObl',
		title: 'Область компании*',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'input',
		editorParams: {},
		editable: true
	},
	{
		field: 'nameCompanyGorod',
		title: 'Город компании*',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'input',
		editorParams: {},
		editable: true
	},
	{
		field: 'basedNameCompany',
		title: 'Базированное имя компании*',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'input',
		editorParams: {},
		editable: true
	},

	{
		field: 'otherOrganization',
		title: 'Другая организация*',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'input',
		editorParams: {},
		editable: true
	},
	{
		field: 'writedRequestofDistribution',
		title: 'Заявление о распределении',
		sorter: 'boolean',
		hozAlign: 'center',
		formatter: 'tickCross',
		editor: 'tickCross',
		editable: true
	},
	{
		field: 'writedRequestofDistributionIP',
		title: 'Заявление о распределении в ИП',
		sorter: 'boolean',
		hozAlign: 'center',
		formatter: 'tickCross',
		editor: 'tickCross',
		editorParams: {},
		editable: true
	},
	{
		field: 'otherOrganization',
		title: 'Другая организация*',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'input',
		editorParams: {},
		editable: true
	},
	{
		field: 'targetAgreement',
		title: 'Целевой договор',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'input',
		editorParams: {},
		editable: true
	},
	{
		field: 'olympiad',
		title: 'Олимпиадник',
		sorter: 'boolean',
		hozAlign: 'center',
		formatter: 'tickCross',
		editor: 'tickCross',
		editorParams: {},
		editable: true
	},
	{
		field: 'confirmationArrivalEnterprise',
		title: 'Подтверждение прибытия в компанию',
		sorter: 'boolean',
		hozAlign: 'center',
		formatter: 'tickCross',
		editor: 'tickCross',
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
	},
	{
		field: 'working',
		title: 'Работает',
		sorter: 'boolean',
		hozAlign: 'center',
		formatter: 'tickCross',
		editor: 'tickCross',
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
		field: 'onMaternityLeave',
		title: 'В декретном отпуске',
		sorter: 'boolean',
		hozAlign: 'center',
		formatter: 'tickCross',
		editor: 'tickCross',
		editorParams: {},
		editable: true
	},
	{
		field: 'worked',
		title: 'Работал',
		sorter: 'boolean',
		hozAlign: 'center',
		formatter: 'tickCross',
		editor: 'tickCross',
		editorParams: {},
		editable: true
	},
	{
		field: 'dateLetter',
		title: 'Дата уведомления',
		sorter: 'date',
		hozAlign: 'center',
		editor: 'date',
		editorParams: {
			format: 'dd.MM.yyyy'
		},
		editorParams: {},
		editable: true
	},
	{
		field: 'reDistributed',
		title: 'Перераспределен',
		sorter: 'boolean',
		hozAlign: 'center',
		formatter: 'tickCross',
		editor: 'tickCross',
		editorParams: {},
		editable: true
	},
	{
		field: 'periodCompulsoryService',
		title: 'Период обязательной службы',
		sorter: 'string',
		hozAlign: 'center',
		editor: 'input',
		formatter: (cell) => {
			const value = cell.getValue();
			return value || "<span style='color: #999'>Введите период</span>";
		},
		editable: true
	},
	{
		field: 'notes',
		title: 'Заметка',
		sorter: 'string',
		hozAlign: 'left',
		editor: 'textarea',
		formatter: 'textarea',
		editorParams: {},
		editable: true
	}
];
