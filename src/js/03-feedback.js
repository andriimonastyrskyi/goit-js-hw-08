import throttle from 'lodash.throttle';

const formEl = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textareaMessage: document.querySelector('textarea'),
};

const FILL_FORM = 'feedback-form-state';
const dataUser = {};

formEl.form.addEventListener('input', throttle(setDataUser, 3000));

formEl.form.addEventListener('submit', submitForm);

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//     return true; // Додано рядок, щоб повернути true, якщо дані успішно збережено
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//     return false; // Додано рядок, щоб повернути false, якщо виникла помилка
//   }
// };

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

function setDataUser() {
  dataUser.email = formEl.inputEmail.value;
  dataUser.message = formEl.textareaMessage.value;

  save(FILL_FORM, dataUser);
}
