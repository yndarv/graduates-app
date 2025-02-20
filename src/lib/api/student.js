const baseUrl = 'http://localhost:8080/api/students';

export async function createStudent(student) {
	const resp = await fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(student)
	}).then((res) => res.json());
	return resp.id;
}

export async function updateStudent(id, student) {
	const resp = await fetch(`${baseUrl}/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(student)
	}).then((res) => res.json());
	return resp.id;
}

export async function removeStudent(id) {
	await fetch(`${baseUrl}/${id}`, {
		method: 'DELETE'
	}).catch((error) => console.log(error));
}
