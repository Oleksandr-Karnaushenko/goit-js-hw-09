const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const textArea = form.elements.message;
const email = form.elements.email;
const localStorageKey = 'feedback-form-state';

//console.log(localStorage);

if (localStorage.length !== 0) {
  const dataFromLokalStorage = JSON.parse(
    localStorage.getItem(localStorageKey)
  );
  email.value = dataFromLokalStorage.email;
  formData.email = dataFromLokalStorage.email;
  textArea.value = dataFromLokalStorage.message;
  formData.message = dataFromLokalStorage.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value !== '' && textArea.value !== '') {
    console.log(localStorage);
    localStorage.removeItem(localStorageKey);
    form.reset();
    console.log(localStorage);
    formData.email = '';
    formData.message = '';
  } else {
    alert('Fill please all fields');
  }
});

//localStorage.removeItem(localStorageKey);
