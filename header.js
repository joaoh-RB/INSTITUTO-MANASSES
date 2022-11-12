// Link active
const li = document.querySelectorAll('#cabecalho nav ul li a');

li.forEach(element => {
    element.addEventListener('click', () => {
        RemoveClass();
        MenuClose();
        element.classList.add('active');
    })
});

function RemoveClass() {
    li.forEach(element => element.classList.remove('active'));
}


// Menu responsive
const nav = document.querySelector('#cabecalho nav');
const buttonOpen = document.querySelector('#menu-open');
const buttonClose = document.querySelector('#menu-close');

buttonOpen.addEventListener('click', () => {
    MenuOpen();
})

buttonClose.addEventListener('click', () => {
    MenuClose();
})

function MenuOpen() {
    nav.classList.add('show');
}

function MenuClose() {
    nav.classList.remove('show');
}

const header = document.querySelector('#cabecalho');

addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        return header.classList.add('active');
    }

    header.classList.remove('active');
})