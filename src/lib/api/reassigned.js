import { baseUrl } from '$lib/api';

export async function createReassigned(studentId, reassignedData) {
	const response = await fetch(`${baseUrl}/api/reassignments/add/${studentId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(reassignedData)
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || 'Failed to create reassigned');
	}

	return response.json();
}

export async function updateReassigned(reassignedId, updateData) {
	const response = await fetch(`${baseUrl}/api/reassignments/update/${reassignedId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(updateData)
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || 'Failed to update reassigned');
	}

	return response.json();
}

export async function deleteReassigned(reassignedId) {
	const response = await fetch(`${baseUrl}/api/reassignments/delete/${reassignedId}`, {
		method: 'DELETE',
		credentials: 'include'
	});
}
