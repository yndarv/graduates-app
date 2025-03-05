import { baseUrl } from '$lib/api';
import { handleResponse } from '$lib/api';

/**
 * Creates a reassigned record for a student.
 * @param {string} studentId - The ID of the student.
 * @param {object} reassignedData - The data to create the reassigned record.
 * @returns {Promise<object>} - The created reassigned record.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function createReassigned(studentId, reassignedData) {
	try {
		const response = await fetch(`${baseUrl}/api/reassignments/add/${studentId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(reassignedData)
		});

		return await handleResponse(response);
	} catch (error) {
		console.error('Error creating reassigned:', error);
		throw new Error(`Failed to create reassigned: ${error.message}`);
	}
}

/**
 * Updates a reassigned record.
 * @param {string} reassignedId - The ID of the reassigned record.
 * @param {object} updateData - The data to update the reassigned record.
 * @returns {Promise<object>} - The updated reassigned record.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function updateReassigned(reassignedId, updateData) {
	try {
		const response = await fetch(`${baseUrl}/api/reassignments/update/${reassignedId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(updateData)
		});

		return await handleResponse(response);
	} catch (error) {
		console.error('Error updating reassigned:', error);
		throw new Error(`Failed to update reassigned: ${error.message}`);
	}
}

/**
 * Deletes a reassigned record.
 * @param {string} reassignedId - The ID of the reassigned record.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function deleteReassigned(reassignedId) {
	try {
		const response = await fetch(`${baseUrl}/api/reassignments/delete/${reassignedId}`, {
			method: 'DELETE',
			credentials: 'include'
		});

		if (!response.ok) {
			await handleResponse(response); // Handle non-OK responses
		}
	} catch (error) {
		console.error('Error deleting reassigned:', error);
		throw new Error(`Failed to delete reassigned: ${error.message}`);
	}
}
