import { baseUrl } from '$lib/api';
import { handleResponse } from '$lib/api';

export async function createStudent(studentData) {
	try {
		const response = await fetch(`${baseUrl}/api/students`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(studentData)
		});

		return await handleResponse(response);
	} catch (error) {
		console.error('Error creating student:', error);
		throw new Error(`Failed to create student: ${error.message}`);
	}
}

export async function updateStudent(studentId, updateData) {
	try {
		const response = await fetch(`${baseUrl}/api/students/${studentId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(updateData)
		});

		return await handleResponse(response);
	} catch (error) {
		console.error('Error updating student:', error);
		throw new Error(`Failed to update student: ${error.message}`);
	}
}

export async function deleteStudent(studentId) {
	try {
		const response = await fetch(`${baseUrl}/api/students/${studentId}`, {
			method: 'DELETE',
			credentials: 'include'
		});

		if (!response.ok) {
			await handleResponse(response);
		}
	} catch (error) {
		console.error('Error deleting student:', error);
		throw new Error(`Failed to delete student: ${error.message}`);
	}
}
