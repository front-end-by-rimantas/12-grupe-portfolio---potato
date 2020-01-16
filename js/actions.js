"use strict";

renderNav(navigation);
headerPosition();
// scroll listener
window.addEventListener("scroll", () => {
  headerPosition();
});

renderServices(services);
renderBlogpost(blog);
