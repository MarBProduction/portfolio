document.addEventListener("DOMContentLoaded", function () {

  const pages = document.querySelectorAll(".pages")

  /* ---------- CHANGE SLIDE ---------- */
  pages.forEach((page, i) => {
    if (!page.querySelector(".sub-menu")) {
      return
    }

    const slider = page.querySelector(".slider-container")
    const rightArrow = page.querySelector(".arrow-right")
    const leftArrow = page.querySelector(".arrow-left")
    const pagination = document.querySelectorAll(".pagination")[i]
    const slideWidth = slider.clientWidth
    const slideAmount = page.querySelectorAll(".slides").length

    for (let i = 0; i < slideAmount; i++) {
      const dot = document.createElement("div")
      dot.innerHTML = `<div class="inner-dot"></div>`
      dot.classList.add("dot")
      if (i === 0) dot.classList.add("active-dot");
      dot.addEventListener("click", () => {
        slider.scrollTo({ left: i * slideWidth, behavior: "smooth"})
      })
      pagination.appendChild(dot)
    }

    rightArrow.addEventListener("click", () => {
      slider.scrollBy({left: slideWidth, behavior: "smooth"})
    })

    leftArrow.addEventListener("click", () => {
      slider.scrollBy({left: -slideWidth, behavior: "smooth"})
    })

    const dots = pagination.querySelectorAll(".dot")

    slider.addEventListener("scroll", () => {      
      const currentIndex = Math.round(slider.scrollLeft / slideWidth)
      dots.forEach(dot => dot.classList.remove("active-dot"))
      dots[currentIndex].classList.add("active-dot")
    })
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