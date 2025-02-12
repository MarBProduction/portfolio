document.addEventListener("DOMContentLoaded", function () {

  const pages = document.querySelectorAll(".pages")

  /* ---------- CHANGE SLIDE ---------- */
  pages.forEach(page => {
    const slider = page.querySelector(".slider-container")
    const rightArrow = page.querySelector(".arrow-right")
    const leftArrow = page.querySelector(".arrow-left")
    const scrollAmount = slider.clientWidth

    if (rightArrow && leftArrow) {
      rightArrow.addEventListener("click", () => {
        slider.scrollBy({left: scrollAmount, behavior: "smooth"})
      })

      leftArrow.addEventListener("click", () => {
        slider.scrollBy({left: -scrollAmount, behavior: "smooth"})
      })
    }
  })


  /* ---------- SWITCH PAGE ---------- */
  const menuButtonMobile = document.querySelectorAll("#menu-mobile div")

  function changePage(e, pageId){
    pages.forEach(page => {
      if (page.id === pageId) {
        page.style.display = "flex"
        return
      }
      page.style.display = "none"
    })

    menuButtonMobile.forEach(menuButton => {
      menuButton.classList.remove("main-active")
    })
    e.target.classList.add("main-active")
  }

  pages.forEach(page => {
    page.style.display = "none"
  })
  menuButtonMobile.forEach(menuButton => {
    switch (menuButton.id) {
      case "project-button":
        menuButton.addEventListener("click", (event) => {
          changePage(event, "projects")
        })
        break;
      
      case "about-me-button":
        menuButton.addEventListener("click", (event) => {
          changePage(event, "about-me")
        })
        break;
      
      case "contact-button":
        menuButton.addEventListener("click", (event) => {
          changePage(event, "contact")
        })
        break;
    
      default:
        break;
    }
  })
  pages[1].style.display = "flex" //TODO delete later, when new top is made
  menuButtonMobile[1].classList.add("main-active") //TODO delete later, when new top is made

});