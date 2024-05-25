
window.addEventListener("load", function() {
    // Code from script1.js 
    let headerHtml = document.getElementById("header");
     let header=`<div class="header"><div class='logo' style="display: flex;align-items: center;">
     <a href='/index.html'>
     <h2 class='logo-text'>Soundharya P</h2>
     </a>
     </div>`;
     header+="<nav  class='nav' style='display: flex;justify-content: center;align-items: center;'>"+"<a href=/index.html>"+"Home"+"</a>"+"<a href=./project/project.html>"+"Projects"+"</a>"+"<a href=/blog.html>"+"Blog"+"</a>"+"</nav></div>";
     headerHtml.innerHTML+=header;
 });
