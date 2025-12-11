/* global document */

document.addEventListener('DOMContentLoaded', () => {
	let hasSubmitted = false;

	const form = document.querySelector('.form-group');
	const input = document.querySelector('.input');
	const errorMessage = document.querySelector('.form-group__error-message');

	const validateEmail = () => {
		input.setCustomValidity('');

		if (input.validity.valueMissing) {
			setError('Please enter your email address.');
		} else if (input.validity.typeMismatch) {
			setError('Please enter a valid email address.');
		} else {
			clearError();
		}
	};

	const setError = message => {
		form.classList.add('form-group--error');
		errorMessage.textContent = message;
	};

	const clearError = () => {
		form.classList.remove('form-group--error');
		errorMessage.textContent = '';
	};

	// Update live only after a submit attempt
	input.addEventListener('input', () => {
		if (hasSubmitted) {
			validateEmail();
		}
	});

	input.addEventListener('blur', () => {
		if (hasSubmitted) {
			validateEmail();
		}
	});

	form.addEventListener('submit', event => {
		hasSubmitted = true;
		validateEmail();

		if (!input.checkValidity()) {
			event.preventDefault();
		}
	});
});
