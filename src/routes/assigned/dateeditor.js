export const dateRangeEditor = (cell, onRendered, success, cancel) => {
	// Create an input element
	const input = document.createElement('input');
	input.type = 'text';
	input.placeholder = 'dd.MM.yyyy-dd.MM.yyyy';
	input.style.width = '100%';

	// Set the current value of the cell (if any)
	input.value = cell.getValue() || '';

	// Focus the input when it's rendered
	onRendered(() => {
		input.focus();
	});

	// Handle keypress events
	input.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			const value = input.value.trim();
			if (validateDateRange(value)) {
				success(value); // Save the value if valid
			} else {
				cancel(); // Cancel if invalid
			}
		} else if (e.key === 'Escape') {
			cancel(); // Cancel on Escape
		}
	});

	// Handle blur event (when input loses focus)
	input.addEventListener('blur', () => {
		const value = input.value.trim();
		if (validateDateRange(value)) {
			success(value); // Save the value if valid
		} else {
			cancel(); // Cancel if invalid
		}
	});

	// Return the input element
	return input;
};

// Function to validate the date range format
const validateDateRange = (value) => {
	const regex = /^\d{2}\.\d{2}\.\d{4}-\d{2}\.\d{2}\.\d{4}$/;
	if (!regex.test(value)) return false;

	// Split the date range into start and end dates
	const [startDateStr, endDateStr] = value.split('-');

	// Parse the dates
	const startDate = parseDate(startDateStr);
	const endDate = parseDate(endDateStr);

	// Check if the dates are valid and start date is before end date
	return startDate && endDate && startDate <= endDate;
};

// Function to parse a date string in dd.MM.yyyy format
const parseDate = (dateStr) => {
	const [day, month, year] = dateStr.split('.');
	const date = new Date(`${year}-${month}-${day}`);
	return !isNaN(date.getTime()) ? date : null;
};
