console.log("HELLO");
var head = document.getElementsByClassName("navbar")[0];
window.onscroll = function(event){
    var scroll = window.pageYOffset;
    if(scroll < 100){
        head.style.backgroundColor = 'transparent';
    }else{
        head.style.backgroundColor = 'black';
    }
}

