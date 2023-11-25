let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 60) {
    document.querySelector('#scroll-top').classList.add('active');
  } else {
    document.querySelector('#scroll-top').classList.remove('active');
  }
};

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();

//fungsi dari contact
const form = document.querySelector('#order form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.querySelector('#order input[type="text"]').value;
  const email = document.querySelector('#order input[type="email"]').value;
  const number = document.querySelector('#order input[type="number"]').value;
  const address = document.querySelector('#order input[type="text"]').value;
  const message = document.querySelector('#order textarea').value;
  console.log('Nama:', name);
  console.log('Email:', email);
  console.log('Jumlah:', number);
  console.log('Alamat:', address);
  console.log('Pesan:', message);
});

//jquery contact
function submitForm(event) {
  event.preventDefault();

  alert('Pesanan Anda Telah Dikirim, Terimakasih!');

  document.getElementById('order-form').reset();
}
