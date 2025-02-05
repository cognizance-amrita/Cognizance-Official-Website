
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


//======================================================== robot ======================================================================

    
/*const r = new rive.Rive({
    src: 'RiveRobot.riv',  // Ensure the file is in the same directory
    canvas: document.getElementById('riveCanvas'),
    autoplay: true,
});*/

const r = new rive.Rive({
    src: 'HomePage\\assets\\RiveRobot.riv',  // Ensure the file is in the same directory
    canvas: document.getElementById('riveCanvas'),
    autoplay: true,
    stateMachines: 'State Machine 1',  // Replace with the correct state machine name
    onLoad: () => {
        
        // Play the "intro" animation first
        r.play('intro', false);  // false means play once

        // After intro completes, play the idle animation in a loop
        r.on(rive.EventType.LOOP, (event) => {
            if (event.data.animationName === 'intro') {
                r.play('idle', true);  // true means loop idle animation
            }
        });
    }
});


//========================================================== work ======================================================================

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".arrows i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; 

    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }

    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; 

    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);



//================================================================= Music ==============================================================

function toggleMute() {
  var audio = document.getElementById('myAudio');
  var icon1 = document.querySelector('.playButton_1 span i');
  var icon2 = document.querySelector('.playButton_2 span i');
  
  if (audio.muted) {
    audio.play();
    audio.muted = false;
    icon1.classList.remove('fa-volume-xmark');
    icon1.classList.add('fa-volume-high');
    icon2.classList.remove('fa-volume-xmark');
    icon2.classList.add('fa-volume-high');
  } else {
    audio.muted = true;
    icon1.classList.remove('fa-volume-high');
    icon1.classList.add('fa-volume-xmark');
    icon2.classList.remove('fa-volume-high');
    icon2.classList.add('fa-volume-xmark');
  }
}
//toggleMute();

//=========================================================== All transitions =========================================================


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom <= 0 || 
    rect.top >= window.innerHeight || 
    rect.right <= 0 || 
    rect.left >= window.innerWidth
  );
}

function handleScroll() {
  const elements = document.querySelectorAll('.About_Me_Inside p,.card,.timecontainer ul li h3,.timecontainer ul li a,.timecontainer ul li p,.timecontainer ul li .date,.timecontainer,.lastcircle,.contact-form tr,.wrapper2,.Skills_Container_1');

  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('slide-in');
      element.classList.remove('slide-in');
      element.style.visibility = 'visible';
    } else {
      element.classList.remove('slide-in');
      element.classList.add('slide-in');
      
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

function handleScroll2() {
    const elements = document.querySelectorAll('.profile_photo_inside, .About_Me_Inside');
  
    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('slide-in-2');
        element.classList.remove('slide-in-2');
        element.style.visibility = 'visible';
      } else {
        element.classList.remove('slide-in-2');
        element.classList.add('slide-in-2');
        
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll2);
  window.addEventListener('load', handleScroll2);

  function handleScroll3() {
    const elements = document.querySelectorAll('.About_Me_Inside');
  
    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('slide-in-3');
        element.classList.remove('slide-in-3');
        element.style.visibility = 'visible';
      } else {
        element.classList.remove('slide-in-3');
        element.classList.add('slide-in-3');
        
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll3);
  window.addEventListener('load', handleScroll3);