const studentBaseRoute = 'http://localhost:8080/api/students';

// fetch and return data
export async function readAllStudents() {
	return await fetch(`${studentBaseRoute}/all`)
		.then((res) => res.json())
		.then((data) => data)
		.catch((err) => console.error(err));
}

export async function createStudent(student) {
	return await fetch(`${studentBaseRoute}`, {
		method: 'POST',
		body: JSON.stringify(student),
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.error(err));
}

export async function updateStudent(studentID, student) {
	await fetch(`${studentBaseRoute}/${studentID}`, {
		method: 'PUT',
		body: JSON.stringify(student),
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export async function deleteStudent(studentID) {
	await fetch(`${studentBaseRoute}/${studentID}`, {
		method: 'DELETE'
	}).catch((err) => console.error(err));
}
