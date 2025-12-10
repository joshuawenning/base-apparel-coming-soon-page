/* global document */

document.addEventListener('DOMContentLoaded', () => {
	const formGroup = document.querySelector('.form-group');
	const input = document.querySelector('.input');
	const formErrorMessage = document.querySelector('.form-group__error-message');

	const validateEmail = () => {
		input.setCustomValidity(''); // Clear browser default

		if (input.validity.valueMissing) {
			setError('Please enter your email address.');
		} else if (input.validity.typeMismatch) {
			setError('Please enter a valid email address.');
		} else {
			clearError();
		}
	};

	const setError = message => {
		formGroup.classList.add('form-group--error');
		formErrorMessage.textContent = message;
	};

	const clearError = () => {
		formGroup.classList.remove('form-group--error');
		formErrorMessage.textContent = '';
	};

	input.addEventListener('input', validateEmail);
	input.addEventListener('blur', validateEmail);

	formGroup.addEventListener('submit', (event) => {
		validateEmail();
		if (!input.checkValidity()) {
			event.preventDefault();
		}
	});
});
