
window.addEventListener("load", function() {
    //Header generation
    let headerHtml = document.getElementById("header");
     let header=`<div class="header"><div class='logo' style="display: flex;align-items: center;">
     <a href='/index.html'>
     <h2 class='logo-text'>Soundharya P</h2>
     </a>
     </div>`;
     header+="<nav  class='nav' style='display: flex;justify-content: center;align-items: center;'>"+"<a href=/index.html>"+"Home"+"</a>"+"<a href=/project/project.html>"+"Projects"+"</a>"+"<a href=/blog.html>"+"Blog"+"</a>"+"</nav></div>";
     headerHtml.innerHTML+=header;

    //Generating Table Of Contents
    var toc = document.getElementById('table-of-contents');
    if (toc){
        var title = document.createElement('h3');
        title.className = 'title text-red toc-title';
        title.textContent = 'Table of Contents';
        toc.appendChild(title);

        var headings = Array.from(document.querySelectorAll('h3:not(.toc-title), h4'));
        headings.forEach(function(heading, index) {
            var link = document.createElement('a');
            var id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
            link.href = '#' + id;
            link.textContent = heading.textContent;
            heading.id = id;

            var listItem = document.createElement('li');
            listItem.appendChild(link);

            if (heading.tagName.toLowerCase() === 'h4') {
                listItem.className = 'sub-heading';
                listItem.style.marginLeft = '20px';
            }else{
                listItem.className = 'heading';
            }
            toc.appendChild(listItem);
        });
    }
 });
