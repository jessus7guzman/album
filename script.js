// Contraseña
function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "dani") {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("audio-button").style.display = "block";
    loadGallery();
  } else {
    alert("Contraseña incorrecta");
  }
}

// Reproducir/pausar audio
function toggleAudio() {
  const audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Descripciones por imagen
const descriptions = [
  "", // índice 0 no se usa
  "Tu y Yo",
  "Despues de la Fotosintesis",
  "Montandote grr",
  "La primera vez durmiendo juntos",
  "Nuestro primer accidente",
  "Tu diva",
  "Que sexy quiero violarte",
  "Tigre y Peruano",
  "Gracias Chatgpt",
  "Que Besotee",
  "El dia que me maltrataste y te hice mi novio",
  "La primera Flor",
  "La Primera Foto que te tome",
  "Un momento tranquilo",
  "Preparando Todo",
  "Primavera juntos me enamore ese dia",
  "Rodrigo Cenando",
  "Foto despues del sexxx",
  "Foto improvisada",
  "El primer boceto",
  "La foto que enviaba para hablar de ti",
  "Yo y Tu"
];

// Cargar galería
function loadGallery() {
  const gallery = document.getElementById("gallery");
  for (let i = 1; i <= 22; i++) {
    const div = document.createElement("div");
    div.className = "foto-item";
    const img = document.createElement("img");
    img.src = `images/foto${i}.jpg`;
    img.alt = `Foto ${i}`;
    img.onclick = () => openLightbox(img.src, i);
    div.appendChild(img);
    gallery.appendChild(div);
  }
}

// Abrir lightbox
function openLightbox(src, index) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-desc").textContent = descriptions[index] || "";
  document.getElementById("lightbox").style.display = "flex";
}

// Cerrar lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}