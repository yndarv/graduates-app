import { baseUrl } from '$lib/api';

export async function createStudent(studentData) {
	const response = await fetch(`${baseUrl}/api/students`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(studentData)
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || 'Failed to create student');
	}

	return response.json();
}

export async function updateStudent(studentId, updateData) {
	const response = await fetch(`${baseUrl}/api/students/${studentId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(updateData)
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || 'Failed to update student');
	}

	return response.json();
}

export async function deleteStudent(studentId) {
	const response = await fetch(`${baseUrl}/api/students/${studentId}`, {
		method: 'DELETE',
		credentials: 'include'
	});
}
