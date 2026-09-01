/* =========================
   NAVBAR MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =========================
   TUTUP MENU SETELAH KLIK
========================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================
   ACTIVE NAVBAR
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================
   MODAL PENGURUS
========================= */

const pengurusModal =
    document.getElementById("pengurusModal");

const modalImage =
    document.getElementById("modalImage");

const modalPosition =
    document.getElementById("modalPosition");

const modalName =
    document.getElementById("modalName");

const modalTask =
    document.getElementById("modalTask");


function openModal(
    position,
    name,
    image,
    task
) {

    modalPosition.textContent = position;

    modalName.textContent = name;

    modalImage.src = image;

    modalTask.textContent = task;

    pengurusModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeModal() {

    pengurusModal.classList.remove("show");

    document.body.style.overflow = "auto";

}


/* =========================
   MODAL PROKER
========================= */

const prokerModal =
    document.getElementById("prokerModal");

const prokerCategory =
    document.getElementById("prokerCategory");

const prokerName =
    document.getElementById("prokerName");

const prokerDescription =
    document.getElementById("prokerDescription");


function showProker(
    name,
    category,
    description,
    video
) {

    prokerName.textContent = name;

    prokerCategory.textContent = category;

    prokerDescription.textContent = description;

    document.getElementById("prokerVideo").src = video;

    prokerModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeProker() {

    prokerModal.classList.remove("show");

    document.getElementById("prokerVideo").src = "";

    document.body.style.overflow = "auto";

}


/* =========================
   TUTUP MODAL KLIK LUAR
========================= */

window.addEventListener("click", (event) => {

    if (event.target === pengurusModal) {

        closeModal();

    }

    if (event.target === prokerModal) {

        closeProker();

    }

});


/* =========================
   TUTUP MODAL DENGAN ESC
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

        closeProker();

    }

});


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});