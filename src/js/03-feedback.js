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
  //   console.log(evt.target.name); - ім'я інпуту (email,message)
  //   console.log(evt.target.value);

  // для того щоб вивести об'єкт з назвою (ключем) та значенням

  formData[evt.target.name] = evt.target.value;
  console.log(formData);
});

function onFormSabmit(event) {
  event.preventDefault();

  console.log('Відправили форму!');

  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  const strValueInput = JSON.stringify(formData);
  console.log(strValueInput);
  localStorage.setItem(STORAGE_KEY, strValueInput);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parseMessage = JSON.parse(savedMessage);
  console.log(parseMessage);

  if (parseMessage) {
    textarea.value = parseMessage.message;
    inputEmail.value = parseMessage.email;
  }
}
