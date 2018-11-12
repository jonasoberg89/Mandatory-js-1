$('head').append('<link rel="stylesheet" type="text/css" href="main.css">');
titleFunction();
headerFunction ();
contactFunction();
pTagFunction ();
listFunction ();
tableHeadFunction();
linkFunction ();

function tableHeadFunction() {
    $("thead:first-child td").each(function() {
        $(this).replaceWith('<th>' + $(this).text() + '</th>'); 
       });
}
function linkFunction (){
    let link = document.querySelectorAll("a")[2];
    link.addEventListener("click", function(){
        link.setAttribute("href", "#Vegetables");
    })
}
function titleFunction(){
    let title = document.querySelector('title');
    titleText = title.textContent = "Fruits & Vegetables Corp";
}
function headerFunction(){
    let head = document.querySelector('h1');
    headNewText = head.textContent = "Fruits & Vegetables Corp";
}
function pTagFunction(){
    let about = document.querySelector('#about');
    about.innerHTML = "";
    let pTag = document.createElement ("p");
    let text = document.createTextNode(" We're the best in fruits & vegetables"); 
    pTag.appendChild(text);
    about.appendChild (pTag);
}
function listFunction(){
    let list = document.getElementsByTagName("li")[2];
    list.getElementsByTagName("a")[0].innerHTML = "Vegetables";
}    
function contactFunction(){
    let title = document.querySelector('#contact')
    let about = document.querySelector('#about')
    let pTag = document.querySelector ('p');
    let hTag = document.createElement ("h2");
    let secondHtag = document.createElement ("h2");
    title.appendChild(hTag);
    hTag.textContent = ("About");
    title.appendChild(secondHtag);
    secondHtag.textContent = ("Contact");

    title.insertBefore(hTag,pTag);
    title.insertBefore(secondHtag,pTag);
    title.insertBefore(about,secondHtag);
}



