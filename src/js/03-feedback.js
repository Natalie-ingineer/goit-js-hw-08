import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

const STORAGE_KEY = 'feedback';

const formData = {};

populateTextarea();

form.addEventListener('submit', onFormSabmit);
textarea.addEventListener('input', throttle(onTextareaInput, 500));

form.addEventListener('input', evt => {
  //   console.log(evt.target.name);
  //   console.log(evt.target.value);

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
  const valueInput = event.target.value;
  console.log(valueInput);
  localStorage.setItem(STORAGE_KEY, valueInput);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    console.log(savedMessage);
    textarea.value = savedMessage;
  }
}
