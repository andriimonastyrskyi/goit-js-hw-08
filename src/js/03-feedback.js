import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textareaMessage: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

const dataUser = {};

refs.form.addEventListener('input', throttle(setDataUser, 3000));

refs.form.addEventListener('submit', setDataUser);

getDataUser();

function setDataUser(event) {
  const key = event.target.name;
  dataUser[key] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataUser));
}

function setDataUser(event) {
  event.preventDefault();

  console.log(dataUser);
  event.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}


function