"use strict";

renderNav(navigation);
headerPosition();
mobileActions();
// scroll listener
window.addEventListener("scroll", updateOnScroll);

renderServices(services);
renderBlogpost(blog);
