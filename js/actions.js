"use strict";

renderNav(navigation);

// scroll listener
window.addEventListener("scroll", () => {
  headerScroll();
});
headerScroll();

renderServices(services);
renderBlogpost(blog);
