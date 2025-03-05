import { baseUrl } from '$lib/api';
import { handleResponse } from '$lib/api';

/**
 * Creates an assigned record for a student.
 * @param {string} studentId - The ID of the student.
 * @param {object} assignedData - The data to create the assigned record.
 * @returns {Promise<object>} - The created assigned record.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function createAssigned(studentId, assignedData) {
	try {
		const response = await fetch(`${baseUrl}/api/distributions/add/${studentId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(assignedData)
		});

		return await handleResponse(response);
	} catch (error) {
		console.error('Error creating assigned:', error);
		throw new Error(`Failed to create assigned: ${error.message}`);
	}
}

/**
 * Updates an assigned record.
 * @param {string} assignedId - The ID of the assigned record.
 * @param {object} updateData - The data to update the assigned record.
 * @returns {Promise<object>} - The updated assigned record.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function updateAssigned(assignedId, updateData) {
	try {
		const response = await fetch(`${baseUrl}/api/distributions/update/${assignedId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(updateData)
		});

		return await handleResponse(response);
	} catch (error) {
		console.error('Error updating assigned:', error);
		throw new Error(`Failed to update assigned: ${error.message}`);
	}
}

/**
 * Deletes an assigned record.
 * @param {string} assignedId - The ID of the assigned record.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function deleteAssigned(assignedId) {
	try {
		const response = await fetch(`${baseUrl}/api/distributions/delete/${assignedId}`, {
			method: 'DELETE',
			credentials: 'include'
		});

		if (!response.ok) {
			await handleResponse(response); // Handle non-OK responses
		}
	} catch (error) {
		console.error('Error deleting assigned:', error);
		throw new Error(`Failed to delete assigned: ${error.message}`);
	}
}
