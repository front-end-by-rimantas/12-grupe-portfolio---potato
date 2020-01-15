"use strict";

renderServices( services );

renderBlogpost( blog );

renderBrogressBar( ProgressBar );
window.addEventListener('scroll', ()=>{
    sectioNumberCounter('.progres-numbr');
    // sectioNumberCounter('#sucsess.example-1');
    // sectioNumberCounter('#failure.example-2');
});

