// Created by Pawel Wierzgon
let isPromoBoxOut = false;
let promoBox = document.querySelector("#promo-box");

// Slide in the promo box and show it
setTimeout(() => {
  promoBox.style.setProperty("right", "20px");
  promoBox.style.setProperty("opacity", "1");
}, 1000);

// Wait 2s for the promo box to fully appear
setTimeout(() => {
  isPromoBoxOut = true;
}, 2000);

// Hide promo box if the user clicks away when it's fully visible
document.querySelector("body").addEventListener("click", (e) => {
  if (e.target !== promoBox && isPromoBoxOut) {
    promoBox.style.setProperty("right", "-200px");
    promoBox.style.setProperty("opacity", "0");
  }
});
