const username = document.querySelector('.usernameSpace');
const email = document.querySelector('.emailSpace');
const image = document.querySelector('.imageSpace');
const completedLessons = document.querySelector('.emailSpace');


username.innerHTML = localStorage.getItem('username');
email.innerHTML = localStorage.getItem('email');
image.innerHTML = `<img src="${localStorage.getItem('photo_url')}" width="50px" style="border-radius: 50px">`