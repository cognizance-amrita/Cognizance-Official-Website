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