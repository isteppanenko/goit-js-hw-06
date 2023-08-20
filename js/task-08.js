const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formObj = new FormData(event.currentTarget);
  const formDataObj = {};

  formObj.forEach((value, name) => {
    formDataObj[name] = value;
  });

  if (formDataObj.email === '' || !formDataObj.password) {
    alert('Всі поля повинні бути заповнені!');
    return;
  }

  console.log(formDataObj);
  form.reset();
}
