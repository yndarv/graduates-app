const baseUrl = 'http://localhost:8080/api/reassignments';

export async function createReassigned(studentId, reassigned) {
	const resp = await fetch(`${baseUrl}/add/${studentId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(reassigned)
	}).then((res) => res.json());
	return resp;
}

export async function updateReassigned(id, reassigned) {
	const resp = await fetch(`${baseUrl}/update/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(reassigned)
	}).then((res) => res.json());
	return resp.id;
}

export async function removeReassigned(id) {
	await fetch(`${baseUrl}/delete/${id}`, {
		method: 'DELETE'
	}).catch((error) => console.log(error));
}
