var gallery = document.getElementsByClassName('photo-gallery')[0];

var blur_div = document.createElement('div');
blur_div.classList.add('blur');


var photos = gallery.querySelectorAll('.photo');


let addblur = (photo) => {
    console.log("HELLO");
    photo.appendChild(blur_div);
    photo.style.color = "white";
}

let removeblur = (photo) =>{
    console.log("REMOVE");
    var bele = photo.getElementsByClassName('blur')[0];
    photo.removeChild(bele);
    photo.style.color = "transparent"
}

photos.forEach((photo) => {
    photo.addEventListener('mouseenter', function(){addblur(photo)});
    photo.addEventListener('mouseleave', function(){removeblur(photo)});
});
