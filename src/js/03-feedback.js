import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
reloadForm();

function onFormInput() {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function reloadForm() {
    if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
    dataForm = {};
}


