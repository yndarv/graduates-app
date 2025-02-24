import { baseUrl } from '$lib/api';

export async function createUnemployed(studentId, unemployedData) {
	const response = await fetch(`${baseUrl}/api/unemployed/add/${studentId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(unemployedData)
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || 'Failed to create unemployed');
	}

	return response.json();
}

export async function updateUnemployed(unemployedId, updateData) {
	const response = await fetch(`${baseUrl}/api/unemployed/update/${unemployedId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(updateData)
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || 'Failed to update unemployed');
	}

	return response.json();
}

export async function deleteUnemployed(unemployedId) {
	const response = await fetch(`${baseUrl}/api/unemployed/delete/${unemployedId}`, {
		method: 'DELETE',
		credentials: 'include'
	});
}
