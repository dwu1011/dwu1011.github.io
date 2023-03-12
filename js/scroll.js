console.log("HELLO");
var head = document.getElementsByClassName("navbar")[0];
var links = head.getElementsByTagName("a");
window.onscroll = function(event){
    for(var i of links){
        i.style.color = "white";
    }
}

const onScrollStop = callback => {
    let isScrolling;
    window.addEventListener('scroll', e => {
        head.style.backgroundColor = 'black';
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            callback();
        }, 150);
      },
      false
    );
};

onScrollStop(() => {
    head.style.backgroundColor = 'transparent';
    for(var i of links){
        i.style.color = "black";
    }
});