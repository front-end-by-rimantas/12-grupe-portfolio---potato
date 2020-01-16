"use strict";

renderNav(navigation);

// scroll listener
window.addEventListener("scroll", () => {
  headerPosition();
});
headerPosition();

renderServices(services);
renderBlogpost(blog);
