import { baseUrl } from '$lib/api';
import { handleResponse } from '$lib/api';

/**
 * Creates an unemployed record for a student.
 * @param {string} studentId - The ID of the student.
 * @param {object} unemployedData - The data to create the unemployed record.
 * @returns {Promise<object>} - The created unemployed record.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function createUnemployed(studentId, unemployedData) {
	try {
		const response = await fetch(`${baseUrl}/api/unemployed/add/${studentId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(unemployedData)
		});

		return await handleResponse(response);
	} catch (error) {
		console.error('Error creating unemployed:', error);
		throw new Error(`Failed to create unemployed: ${error.message}`);
	}
}

/**
 * Updates an unemployed record.
 * @param {string} unemployedId - The ID of the unemployed record.
 * @param {object} updateData - The data to update the unemployed record.
 * @returns {Promise<object>} - The updated unemployed record.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function updateUnemployed(unemployedId, updateData) {
	try {
		const response = await fetch(`${baseUrl}/api/unemployed/update/${unemployedId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(updateData)
		});

		return await handleResponse(response);
	} catch (error) {
		console.error('Error updating unemployed:', error);
		throw new Error(`Failed to update unemployed: ${error.message}`);
	}
}

/**
 * Deletes an unemployed record.
 * @param {string} unemployedId - The ID of the unemployed record.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function deleteUnemployed(unemployedId) {
	try {
		const response = await fetch(`${baseUrl}/api/unemployed/delete/${unemployedId}`, {
			method: 'DELETE',
			credentials: 'include'
		});

		if (!response.ok) {
			await handleResponse(response); // Handle non-OK responses
		}
	} catch (error) {
		console.error('Error deleting unemployed:', error);
		throw new Error(`Failed to delete unemployed: ${error.message}`);
	}
}
