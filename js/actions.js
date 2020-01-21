renderNav(navigation);
headerPosition();
// scroll listener
window.addEventListener("scroll", updateOnScroll);

renderServices(services);
renderBlogpost(blog);
// brogress bar
renderBrogressBar(ProgressBar);
autoCounter();

// gallerie
renderGallery("#portfolio_works", potatofolio);
