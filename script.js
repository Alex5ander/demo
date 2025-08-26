(function () {
  /** @type {HTMLAnchorElement} */
  const whatsapp = document.getElementById('whatsapp');

  whatsapp.onclick = () => {
    const hour = new Date().getHours();

    const messages = [
      "Olá bom dia, tudo bem?, vim pelo site",
      "Olá boa tarde, tudo bem? vim pelo site",
      "Olá boa noite, tudo bem? vim pelo site"
    ];

    const message = encodeURI(
      hour > 8 && hour < 13 ? messages[0] :
        hour > 13 && hour < 18 ? messages[1] : messages[2]
    );

    whatsapp.href = `https://wa.me/5515997908554?text=${message}`;
  }

  const mode = localStorage.getItem('dark');
  if (mode) {
    document.body.classList.toggle('dark-mode');
  }
}())

function toggleDarkMode() {
  const mode = localStorage.getItem('dark');
  document.body.classList.toggle('dark-mode');
  if (mode) {
    localStorage.removeItem('dark');
  } else {
    localStorage.setItem('dark', true);
  }
}

// const imagesFolder = "images";

// const jumbinhoImages = [
//   "JUMBINHO-P-FRENTE.png",
//   "JUMBINHO-M-FRENTE.png",
//   "JUMBINHO-G-FRENTE.png",
//   "JUMBINHO-XG-FRENTE.png",
//   "JUMBINHO-XXG-FRENTE.png",
// ];

// jumbinhoImages.forEach(path => {

//   const img = document.createElement('img');
//   img.src = `${imagesFolder}/${path}`;

//   document.getElementById('images').appendChild(img)
// })