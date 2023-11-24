// select all specific img modals
const img1Modal = document.getElementById("img1-modal");
const img2Modal = document.getElementById("img2-modal");
const img3Modal = document.getElementById("img3-modal");
const img4Modal = document.getElementById("img4-modal");
const img5Modal = document.getElementById("img5-modal");
const img6Modal = document.getElementById("img6-modal");

// select all imgs and modals
const imgs = document.querySelectorAll(".gallery-img");
const modals = document.querySelectorAll(".img-modal");

// show image modal on click
imgs.forEach((img) => {
  img.addEventListener("click", function (e) {
    if (e.target.id == "img1") {
      img1Modal.classList.remove("hidden");
    }
    if (e.target.id == "img2") {
      img2Modal.classList.remove("hidden");
    }
    if (e.target.id == "img3") {
      img3Modal.classList.remove("hidden");
    }
    if (e.target.id == "img4") {
      img4Modal.classList.remove("hidden");
    }
    if (e.target.id == "img5") {
      img5Modal.classList.remove("hidden");
    }
    if (e.target.id == "img6") {
      img6Modal.classList.remove("hidden");
    }
  });
});

// hide image modal on click
modals.forEach((modal) => {
  modal.addEventListener("click", function (e) {
    e.target.classList.add("hidden");
  });
});
