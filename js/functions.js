"use strict";
//Update on scroll
function updateOnScroll() {
  headerPosition();
  autoCounter();
}

//Nav
function renderNav(data) {
  if (!Array.isArray(data)) {
    return console.error("ERROR: Incorrect navigation data format.");
  }
  if (data.length === 0) {
    return console.error("ERROR: Navigation data array is empty");
  }

  let HTML = "";
  const targetDOM = document.querySelector("#main_header > .row nav");

  for (let i = 0; i < data.length; i++) {
    const navItem = data[i];
    HTML += `<a href="${navItem.to}">${navItem.title}<span></span></a>`;
  }

  targetDOM.innerHTML = HTML;
}

function removeActive() {
  document
    .querySelector(`#main_header > .row nav > a.active`)
    .classList.remove("active");
}

function headerPosition() {
  if (window.scrollY > 180) {
    document.querySelector("#main_header").classList.add("header-fixed");
  } else {
    document.querySelector("#main_header").classList.remove("header-fixed");
  }

  let sectionsHeights = [];
  for (let i = 0; i < navigation.length; i++) {
    const link = navigation[i].to;
    if (link === "#") {
      sectionsHeights.push(0);
    } else {
      const section = document.querySelector(link);
      sectionsHeights.push(section.offsetTop);
    }
  }

  const headerHeight = document.querySelector("#main_header").offsetHeight;
  const height = window.scrollY + headerHeight;
  let activeSection = 0;
  for (let i = 0; i < sectionsHeights.length; i++) {
    const currentHeight = sectionsHeights[i];
    if (currentHeight <= height) {
      activeSection = i;
    } else {
      break;
    }
  }

  if (document.querySelector(`#main_header > .row nav > a.active`) === null) {
    document
      .querySelector(
        `#main_header > .row nav > a[href="${navigation[activeSection].to}"]`
      )
      .classList.add("active");
  } else {
    removeActive();

    document
      .querySelector(
        `#main_header > .row nav > a[href="${navigation[activeSection].to}"]`
      )
      .classList.add("active");
  }
}
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
                   //  ar galiu data-animation deti cia? ar i HTML reikiia?
    HTML += `<div class=" pbcontent col-4 col-md-12"> 
              <div class="bg-primary progr-bar">
                <div class="progres-numbr"
                data-counter-from="0"
                data-counter-to="${block.number}"
                data-counter-time="2000">${block.number}</div>
                <h5 class="no-decoration">${block.title}</h5>
              </div>
            </div>`;

    createdBars++;

  }

  document.querySelector('#progress-bar > .row').innerHTML = HTML;
  return;
}

function autoCounter(){
  const height = window.scrollY;  
  const screenHeight = window.innerHeight;
  const progresBarCounter = document.querySelector('#progress-bar').offsetTop;
  const scroller = height + screenHeight;  

  console.log( scroller);
  
  if ( scroller > progresBarCounter ) {
    
    if ( document.querySelector('#progress-bar.activated') ) {
      return;
    } else {

          document.querySelector('#progress-bar').classList.add("activated");
          
        const numbrElement = document.querySelectorAll('[data-counter-from]');
        const speed = 1000 / 25;
        
          
          for ( let i=0; i<numbrElement.length; i++) {
            let step = 0;
            const elem = numbrElement[i];
            const from = parseFloat(elem.dataset.counterFrom);
            const to = parseFloat(elem.dataset.counterTo);
            const time = parseFloat(elem.dataset.counterTime);
            const totalSteps = Math.ceil(time / speed) + 1;
            
            elem.textContent = from;
            console.log();
            
            const timer = setInterval(() => {
              step++; 
              elem.textContent = Math.round((to - from) / totalSteps * step);
              if ( step === totalSteps ){
                clearInterval( timer )
              }
            }, speed ); 
            


    }
    }
    
    }

    
  
    
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

