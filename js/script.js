function mostrarAlerta() {
  alert("¡Bienvenido a Travel Starter Guide!");
}

function modoOscuro() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("modo", "oscuro");
  } else {
    localStorage.setItem("modo", "claro");
  }
}

function volverArriba() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function buscarDestino() {
  const input = document.getElementById("busqueda");

  if (!input) return;

  const destino = input.value.toLowerCase().trim();

  if (destino.includes("japon")) {
    window.location.href = "destinos.html#japon";
  } else if (destino.includes("italia")) {
    window.location.href = "destinos.html#italia";
  } else if (destino.includes("suecia")) {
    window.location.href = "destinos.html#suecia";
  } else if (destino.includes("alemania")) {
    window.location.href = "destinos.html#alemania";
  } else if (destino.includes("australia")) {
    window.location.href = "destinos.html#australia";
  } else {
    alert("Destino no encontrado");
  }
}

function buscarContenido() {
  const input = document.getElementById("busqueda");

  if (!input) return;

  const texto = input.value.toLowerCase().trim();

  if (
    texto.includes("consejo") ||
    texto.includes("viaje") ||
    texto.includes("documento") ||
    texto.includes("equipaje")
  ) {
    window.location.href = "#consejos-importantes";
  } else if (texto.includes("destino")) {
    window.location.href = "destinos.html";
  } else if (texto.includes("contacto")) {
    window.location.href = "contact.html";
  } else {
    alert("No se encontró un resultado exacto.");
  }
}

function enviarFormulario(event) {
  event.preventDefault();

  const nombreInput = document.getElementById("nombre");
  const correoInput = document.getElementById("correo");
  const mensajeInput = document.getElementById("mensaje");

  if (!nombreInput || !correoInput || !mensajeInput) return;

  const nombre = nombreInput.value.trim();
  const correo = correoInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Completa todos los campos");
    return;
  }

  const asunto = encodeURIComponent("Mensaje de contacto - Travel Starter Guide");
  const cuerpo = encodeURIComponent(
    "Nombre: " + nombre + "\n" +
    "Correo: " + correo + "\n\n" +
    "Mensaje:\n" + mensaje
  );

  window.location.href = `mailto:travelstarterguide@email.com?subject=${asunto}&body=${cuerpo}`;
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("modo") === "oscuro") {
    document.body.classList.add("dark-mode");
  }

  const btnArriba = document.getElementById("btnArriba");

  if (btnArriba) {
    btnArriba.style.display = "none";

    window.addEventListener("scroll", function () {
      if (window.scrollY > 200 || document.documentElement.scrollTop > 200) {
        btnArriba.style.display = "block";
      } else {
        btnArriba.style.display = "none";
      }
    });
  }

  if (document.querySelector(".miSwiper") && typeof Swiper !== "undefined") {
    new Swiper(".miSwiper", {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }

  const japonImgs = [
    "images/japon.jpg",
    "images/japon.2.jpg",
    "images/japon.3.jpg"
  ];

  let japonIndex = 0;
  const japonSlider = document.querySelector(".japon-slider");

  if (japonSlider) {
    setInterval(() => {
      japonSlider.style.opacity = 0;

      setTimeout(() => {
        japonIndex = (japonIndex + 1) % japonImgs.length;
        japonSlider.src = japonImgs[japonIndex];
        japonSlider.style.opacity = 1;
      }, 400);
    }, 3000);
  }

  const australiaImgs = [
    "images/australia.jpg",
    "images/australia.2.jpg",
    "images/australia.3.jpg"
  ];

  let australiaIndex = 0;
  const australiaSlider = document.querySelector(".australia-slider");

  if (australiaSlider) {
    setInterval(() => {
      australiaSlider.style.opacity = 0;

      setTimeout(() => {
        australiaIndex = (australiaIndex + 1) % australiaImgs.length;
        australiaSlider.src = australiaImgs[australiaIndex];
        australiaSlider.style.opacity = 1;
      }, 400);
    }, 3000);
  }

  const elementosAnimados = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

  function mostrarElementos() {
    elementosAnimados.forEach(elemento => {
      const top = elemento.getBoundingClientRect().top;
      const visible = window.innerHeight - 100;

      if (top < visible) {
        elemento.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", mostrarElementos);
  window.addEventListener("load", mostrarElementos);
  mostrarElementos();

  if (typeof gsap !== "undefined") {
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (document.querySelector(".hero-text")) {
      gsap.from(".hero-text", {
        y: -50,
        opacity: 0,
        duration: 1.5
      });
    }

    if (document.querySelector(".card-section")) {
      gsap.from(".card", {
        scrollTrigger: {
          trigger: ".card-section",
          start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3
      });
    }

    if (document.querySelector(".scroll-img")) {
      gsap.from(".scroll-img", {
        scrollTrigger: {
          trigger: ".scroll-img",
          start: "top 85%"
        },
        scale: 0.8,
        opacity: 0,
        duration: 1
      });
    }
  }
});

function buscarDestino(event) {
  if (event) {
    event.preventDefault();
  }

  const input = document.getElementById("busqueda");

  if (!input) return;

  const destino = input.value.toLowerCase().trim();

  if (destino.includes("japon")) {
    window.location.href = "destinos.html#japon";
  } else if (destino.includes("italia")) {
    window.location.href = "destinos.html#italia";
  } else if (destino.includes("suecia")) {
    window.location.href = "destinos.html#suecia";
  } else if (destino.includes("alemania")) {
    window.location.href = "destinos.html#alemania";
  } else if (destino.includes("australia")) {
    window.location.href = "destinos.html#australia";
  } else if (destino === "") {
    alert("Escribe un destino para buscar.");
  } else {
    alert("Solo puedes buscar: Japón, Italia, Suecia, Alemania o Australia.");
  }
}