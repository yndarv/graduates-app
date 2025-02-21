const baseUrl = 'http://localhost:8080/api/distributions';

export async function createAssigned(studentId, assigned) {
	const resp = await fetch(`${baseUrl}/add/${studentId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(assigned)
	}).then((res) => res.json());
	return resp;
}

export async function updateAssigned(id, assigned) {
	const resp = await fetch(`${baseUrl}/update/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(assigned)
	}).then((res) => res.json());
	return resp.id;
}

export async function removeAssigned(id) {
	await fetch(`${baseUrl}/delete/${id}`, {
		method: 'DELETE'
	}).catch((error) => console.log(error));
}
