import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const inputEmail = document.querySelector('input');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

populateTextarea();

form.addEventListener('submit', onFormSabmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
});

function onTextareaInput(event) {
  const strValueInput = JSON.stringify(formData);
  console.log(strValueInput);
  localStorage.setItem(STORAGE_KEY, strValueInput);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parseMessage = JSON.parse(savedMessage);

  if (parseMessage) {
    textarea.value = parseMessage.message;
    inputEmail.value = parseMessage.email;
  }
}

function onFormSabmit(event) {
  event.preventDefault();
  const emailData = event.target.elements.email.value;
  const messageData = event.target.elements.message.value;

  if (emailData === '' || messageData === '') {
    return alert(`Помилка! Всі поля повинні бути заповнені!`);
  }
  const data = {
    Email: emailData,
    Message: messageData,
  };
  console.log(data);

  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
