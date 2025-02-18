import { mockStudent } from './mock';

export const tableColumns = [
	{
		field: 'id',
		title: 'ID',
		sorter: 'number',
		width: 50,
		visible: false,
		hozAlign: 'center',
		frozen: true,
		editable: false,
		resizeable: false
	},
	{
		field: 'fullName',
		title: 'ФИО',
		sorter: 'string',
		hozAlign: 'left',
		frozen: true,
		resizeable: false
	},
	{
		field: 'address',
		title: 'Адрес',
		sorter: 'string',
		hozAlign: 'left',
		frozen: false,
		resizeable: false
	},
	{
		field: 'phoneNumber',
		title: 'Телефон',
		sorter: 'alphanum',
		hozAlign: 'center',
		resizeable: false
	},
	{
		field: 'speciality',
		title: 'Специальность',
		sorter: 'string',
		hozAlign: 'left',
	},
	{
	  field: 'specialityCode',
		title: 'Код специальности',
		sorter: 'alphanum',
		hozAlign: 'center',
	},
	{
		field: 'faculty',
		title: 'Факультет',
		sorter: 'string',
		width: 120,
	},
	{
		field: 'formEducation',
		title: 'Форма образования',
		sorter: 'string',
	},
	{
		field: 'stepEducation',
		title: 'Ступень образования',
		sorter: 'string',
	},
	{
		field: 'yearOfGraduation',
		title: 'Год выпуска',
		sorter: 'number',
		hozAlign: 'center',
	}
];

export const tableData = Array.from({ length: 100 }, () => mockStudent());
