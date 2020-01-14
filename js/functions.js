"use strict";

//Nav
//Nav end

// Services
function renderServices(data) {
  let HTML = "";

  const targetDOM = document.querySelector("#services_blocks");

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
//Services end

//Progress
function renderBrogressBar( data ) {
  const maxBarStuff = 3;
  let createdBars = 0; 
  let HTML = '';

  for ( let i=0; i<data.length; i++ ) {
    if (createdBars === maxBarStuff ){
      break;
    }
    const block = data[i];

    HTML += `<div class="col-4 col-md-12">
              <div class="bg-primary progr-bar">
                <div class="progres-numbr">${block.number}</div>
                <h5 class="no-decoration">${block.title}</h5>
              </div>
            </div>`;

    createdBars++;

  }



  document.querySelector('#progress-bar > .row').innerHTML = HTML;
  return;
}
//Progress end

//Portfolio
//Portfolio end

//Testimonial
//Testimonial end

//Blog
function renderBlogpost(data) {
  if (!Array.isArray(data)) {
    return console.error("ERROR: Incorrect blogpost data format.");
  }
  if (data.length === 0) {
    return console.error("ERROR: Blogpost data array is empty");
  }

  let HTML = "";
  const targetDOM = document.querySelector("#blog_posts");

  const generateTags = tags => {
    if (!Array.isArray(tags)) {
      return console.error("ERROR: Incorrect blogpost.tags data format.");
    }
    if (tags === 0) {
      return console.error("ERROR: blogpost.tags data array is empty");
    }

    let HTML = "";

    for (let i = 0; i < tags.length; i++) {
      if (i === tags.length - 1) {
        HTML += `<a href="#">${tags[i]}</a>`;
      } else {
        HTML += `<a href="#">${tags[i]}</a>, `;
      }
    }

    return HTML;
  };

  for (let i = 0; i < data.length; i++) {
    const postData = data[i];

    HTML += `<div class="blogpost col-4 col-md-12 mb-30">
    <img src="./img/blog/${postData.img}.jpg" alt="${postData.imgAlt}">
    <div class="content">
      <div class="tag">
        ${generateTags(postData.tags)}
      </div>
      <a href="#">
      <h5 class="no-decoration">${postData.title}</h5>
    </a>
      <p class="color-secondary">${postData.description}</p>
      <div class="date-coment">
        <span>${postData.date}</span>
        <span><i class="fa fa-comments"></i> ${postData.comments}</span>
      </div>
    </div>
  </div>`;
  }

  targetDOM.innerHTML = HTML;
}
//Blog end

