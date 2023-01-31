import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textareaMessage: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

const dataUser = {};

refs.form.addEventListener('input', throttle(setDataInput, 500));

refs.form.addEventListener('submit', setDataSubmit);

function setDataInput(event) {
  const key = event.target.name;

  dataUser[key] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataUser));
}

function setDataSubmit(event) {
  event.preventDefault();
  console.log(dataUser);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function getStorageData() {
  const data = localStorage.getItem(STORAGE_KEY);
  const parseData = JSON.parse(data);
  if (parseData) {
    parseData.email
      ? (refs.inputEmail.value = parseData.email)
      : (refs.inputEmail.value = '');
    parseData.message
      ? (refs.textareaMessage.value = parseData.message)
      : (refs.textareaMessage.value = '');
  }
}

getStorageData();
