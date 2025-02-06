//================================================================ Nav Bar ================================================================


function togglecheck() {
    var screenWidth = window.innerWidth;
    var menuList = document.getElementById("menulist");
    var menuListItems = menuList.getElementsByTagName("li");
  
    if (screenWidth > 1150) {
      menuList.style.display = "none";
      for (var i = 0; i < menuListItems.length; i++) {
        menuListItems[i].style.display = "none";
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    togglecheck(); 
  });
  
  window.addEventListener("resize", function() {
    togglecheck(); 
  });
  
  
function toggleMenu() {
    var menuList = document.getElementById("menulist");
    var menuListItems = menuList.getElementsByTagName("li");
    if (menuList.style.display === "none") {
        menuList.style.display = "block";
        for (var i = 0; i < menuListItems.length; i++) {
        menuListItems[i].style.display = "block";
        }
    } else {
        menuList.style.display = "none";
        for (var i = 0; i < menuListItems.length; i++) {
        menuListItems[i].style.display = "none";
        }
    }
    }

function Menuoff() {
    var menuList = document.getElementById("menulist");
    var menuListItems = menuList.getElementsByTagName("li");
    if (menuList.style.display === "block") {
    menuList.style.display = "none";
    for (var i = 0; i < menuListItems.length; i++) {
        menuListItems[i].style.display = "none";
    }
    }
}


document.addEventListener('DOMContentLoaded', () => {

    //-----------------------------------------------------------------------frontbg--------------------------------------------------------------------

    // Initialising the canvas
    var canvas = document.querySelector('#frontbg'),
    ctx = canvas.getContext('2d');
    

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    var letters = 'DELTA';
    letters = letters.split('');

    // Setting up the columns
    var fontSize = 20,
    columns = canvas.width / fontSize;

    // Setting up the drops
    var drops = [];
    for (var i = 0; i < columns; i++) {
    drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = 'white';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
    drops[i] = 0;
    }
    }
    }
    setInterval(draw, 50);

});

    
    
    //-----------------------------------------------------------------------audio--------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
window.onload = function() {
    const audio1 = document.getElementById('myAudio');
    audio1.play();
    const icon1 = document.querySelector('.playButton_1 i');
    icon1.classList.add('rot_anime');
};
});

// Function to toggle audio mute/unmute
function toggleMute() {
var audio = document.getElementById('myAudio');
const icon1 = document.querySelector('.playButton_1 i');


if (audio.muted) {
    audio.muted = false;
    audio.play(); // Ensure it's playing when unmuted
    icon1.classList.remove('fa-volume-xmark');
    icon1.classList.add('fa-volume-high');
    icon1.classList.add('rot_anime');
} else {
    audio.muted = true;
    icon1.classList.remove('fa-volume-high');
    icon1.classList.add('fa-volume-xmark');
    icon1.classList.remove('rot_anime');
}
}

   
      

    //-----------------------------------------------------------------------img--------------------------------------------------------------------

const gallery = document.querySelectorAll('.timecontainer img');

gallery.forEach(img => {
    img.addEventListener('click', () => {
    window.open(img.src, '_blank');
    });
});
      

