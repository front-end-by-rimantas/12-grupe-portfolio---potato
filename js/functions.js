"use strict";

function renderServices(target, data) {
  let HTML = "";

  const targetDOM = document.querySelector(target);

  if (!Array.isArray(data)) {
    return console.error("ERROR: Incorrect services data format.");
  }
  if (data.length === 0) {
    return console.error("ERROR: Services data array is empty");
  }

  for (let i = 0; i < data.length; i++) {
    const service = data[i];
    HTML += `<div class="service-item col-4 col-md-6 col-sm-12 mb-30">
        <div class="block">
          <div class="icon-container">
            <div class="circle">
              <div class="dot"></div>
            </div>
            <img src="../img/services/${service.icon}.svg" alt="${service.title}">
          </div>
          <h4 class="mv-20">${service.title}</h4>
          <p class="color-secondary">${service.description}</p>
        </div>
      </div>`;
  }

  targetDOM.innerHTML = HTML;

  const serviceItems = targetDOM.querySelectorAll(".service-item");

  const iconCircles = targetDOM.querySelectorAll(".circle");

  for (let i = 0; i < serviceItems.length; i++) {
    serviceItems[i].addEventListener("mouseover", e => {
      iconCircles[i].classList.add("play");
    });

    serviceItems[i].addEventListener("mouseout", e => {
      iconCircles[i].classList.remove("play");
    });
  }

  return;
}
