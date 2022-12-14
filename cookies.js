const buttonCookies = document.querySelector("#cookies button");
const containerCookies = document.getElementById('cookies');

buttonCookies.addEventListener('click', (e) => {
    localStorage.setItem('cookies', 'cookies aceito');

    containerCookies.style.display = 'none';
})