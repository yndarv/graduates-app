const baseUrl = 'http://localhost:8080/api/unemployed';

export async function createUnemployed(studentId, unemployed) {
	const resp = await fetch(`${baseUrl}/add/${studentId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(unemployed)
	}).then((res) => res.json());
	return resp;
}

export async function updateUnemployed(id, unemployed) {
	const resp = await fetch(`${baseUrl}/update/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(unemployed)
	}).then((res) => res.json());
	return resp.id;
}

export async function removeUnemployed(id) {
	await fetch(`${baseUrl}/delete/${id}`, {
		method: 'DELETE'
	}).catch((error) => console.log(error));
}
