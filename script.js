var home = document.querySelector(".home")
function scrollHome(){
    home.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


function scrollSkills(){
    var skills = document.querySelector(".skills")
    skills.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function scrollProjects(){
    var project = document.querySelector(".projects")
    project.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function scrollContact(){
    var contact = document.querySelector(".contact-me")
    contact.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

var carouselImages = [
    {
        src: "images/profilepic/img1.jpg",
        alt: "pic 1"
    },

    {
        src: "images/profilepic/img2.jpg",
        alt: "pic 2"
    },
    
    {
        src: "images/profilepic/img3.jpg",
        alt: "pic 3"
    }

];

var selectedImage =0;
function nextImage(){
    if(selectedImage === 2) {
        selectedImage = 0;
    } else {
        selectedImage++;
    }

    changeImage(selectedImage);
}

function previousImage(){
    if(selectedImage === 0) {
        selectedImage = 2;
    } else {
        selectedImage--;
    }

    changeImage(selectedImage);
}

function changeImage(i){
    if(i != selectedImage){
        selectedImage = i;
    }

    var imageToChange = document.querySelector("#ppic");
    imageToChange.src = carouselImages[i].src;
    imageToChange.alt = carouselImages[i].alt;
}