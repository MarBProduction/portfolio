window.addEventListener('load', function(){
  let isActive = false;
  let dropDownMenu = document.getElementById("dropdown-menu");
  let burgerIcon = document.getElementById("burger-icon");
  let menuOptins = document.querySelectorAll("#dropdown-menu a");
  let content = document.getElementById("content");
  let logo = document.getElementById("logo");
  let iconArray = [
    '<img src="img/burger-icon.png" alt="Activate dropdown menu">',
    '<img src="img/cross-icon.png" alt="Deactivate dropdown menu">'
  ];
  
  burgerIcon.addEventListener("click", toggleDropDown);
  content.addEventListener("click", hideDropDown);
  logo.addEventListener("click", hideDropDown);
  menuOptins.forEach(option => {
    option.addEventListener("click", hideDropDown);
  })

  function hideDropDown(){
    dropDownMenu.style.display = "none";
    burgerIcon.innerHTML = iconArray[0];
    isActive = false;
  }
  function showDropDown(){
    dropDownMenu.style.display = "block";
    burgerIcon.innerHTML = iconArray[1];
    isActive = true;
  }

  function toggleDropDown(){
    if(isActive) hideDropDown();
    else showDropDown();
  }

  hideDropDown();
});
