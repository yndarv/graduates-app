import { mockStudent } from './mock';

export const columns = [
	{
		field: 'id',
		title: 'ID',
		sorter: 'number',
		width: 50,
		hidden: true,
		hozAlign: 'center',
		frozen: true,
		editable: false
	}
];
export const data = Array.from({ length: 100 }, () => mockStudent());
