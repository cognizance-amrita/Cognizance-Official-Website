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
        