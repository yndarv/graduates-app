import { baseUrl } from '$lib/api';

export async function createAssigned(studentId, assignedData) {
	const response = await fetch(`${baseUrl}/api/distributions/add/${studentId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(assignedData)
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || 'Failed to create assigned');
	}

	return response.json();
}

export async function updateAssigned(assignedId, updateData) {
	const response = await fetch(`${baseUrl}/api/distributions/update/${assignedId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(updateData)
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || 'Failed to update assigned');
	}

	return response.json();
}

export async function deleteAssigned(assignedId) {
	const response = await fetch(`${baseUrl}/api/distributions/delete/${assignedId}`, {
		method: 'DELETE',
		credentials: 'include'
	});
}
