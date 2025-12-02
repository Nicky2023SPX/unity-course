const username = document.querySelector('.usernameSpace');
const email = document.querySelector('.emailSpace');
const image = document.querySelector('.imageSpace');
const completedLessons = document.querySelector('.emailSpace');

if (localStorage.getItem('email') == null)
{
    document.querySelector('#profile').classList.add("blurred");
}


username.innerHTML = localStorage.getItem('username');
email.innerHTML = localStorage.getItem('email');
image.innerHTML = `<img src="${localStorage.getItem('photo_url')}" width="50px" style="border-radius: 50px">`