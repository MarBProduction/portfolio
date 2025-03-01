document.addEventListener("DOMContentLoaded", function () {

  const pages = document.querySelectorAll(".pages")
  let contentWidth = window.innerWidth > 1400 ? 1400 : window.innerWidth
  window.addEventListener("resize", () => {
    contentWidth = window.innerWidth > 1400 ? 1400 : window.innerWidth
  })
  

  /* ---------- CHANGE SLIDE ---------- */
  pages.forEach(page => {
    if (!page.querySelector(".sub-menu")) {
      return
    }

    const slider = page.querySelector(".slider-container")
    const slides = page.querySelectorAll(".slides")
    const slideAmount = slides.length
    const subMenuDesktop = page.querySelector(".sub-menu-desktop")
    const rightArrow = page.querySelector(".arrow-right")
    const leftArrow = page.querySelector(".arrow-left")
    const pagination = page.querySelector(".pagination")

    for (let i = 0; i < slideAmount; i++) {
      /* Desktop menu items */
      const subMenuItem = document.createElement("div")
      const slideTitle = slides[i].querySelector(".slide-title").innerHTML
      subMenuItem.innerHTML = slideTitle
      subMenuItem.classList.add("sub-menu-item")
      if(i === 0) subMenuItem.classList.add("sub-menu-item-active")
      subMenuItem.addEventListener("click", () => {
        slider.scrollTo({ left: i * contentWidth, behavior: "smooth"})
      })
      subMenuDesktop.appendChild(subMenuItem)

      /* Mobile pagination */
      const dot = document.createElement("div")
      dot.innerHTML = `<div class="inner-dot"></div>`
      dot.classList.add("dot")
      if (i === 0) dot.classList.add("active-dot");
      dot.addEventListener("click", () => {
        slider.scrollTo({ left: i * contentWidth, behavior: "smooth"})
      })
      pagination.appendChild(dot)
    }

    /* Mobile slide arrows*/
    rightArrow.addEventListener("click", () => {
      slider.scrollBy({left: contentWidth, behavior: "smooth"})
    })
    leftArrow.addEventListener("click", () => {
      slider.scrollBy({left: -contentWidth, behavior: "smooth"})
    })

    const dots = pagination.querySelectorAll(".dot")
    const subMenuItems = subMenuDesktop.querySelectorAll(".sub-menu-item")

    slider.addEventListener("scroll", () => {      
      const currentIndex = Math.round(slider.scrollLeft / contentWidth)
      /*Desktop menu itmes */
      subMenuItems.forEach(subMenuItem => subMenuItem.classList.remove("sub-menu-item-active"))
      subMenuItems[currentIndex].classList.add("sub-menu-item-active")
      /*Mobile pagination */
      dots.forEach(dot => dot.classList.remove("active-dot"))
      dots[currentIndex].classList.add("active-dot")
    })
  })


  /* ---------- SWITCH PAGE ---------- */
  const homeButtonMobile = document.querySelector("#logo")
  const wrapperElement = document.querySelector("#wrapper")

  function changePage(e, pageId){
    pages.forEach(page => {
      if (page.id === pageId) {
        page.style.display = "flex"
        return
      }
      page.style.display = "none"
    })

    document.querySelectorAll(".main-menu").forEach(menu => {
      menu.querySelectorAll("div").forEach(menuButton => {
        menuButton.classList.remove("main-active")
      })
      
      if(e.target.id !== "logo") {
        e.target.classList.add("main-active")
        wrapperElement.style.display = "block"
      } else {
        wrapperElement.style.display = "none"
      }
    })
  }

  pages.forEach(page => {
    page.style.display = "none"
  })
  homeButtonMobile.addEventListener("click", (event) => {
    changePage(event, "home")
  })

  document.querySelectorAll(".main-menu").forEach(menu => {
    menu.querySelectorAll("div").forEach(menuButton => {
      menuButton.classList.forEach(c => {
        switch (c.valueOf()) {
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
    })
  })
  pages[0].style.display = "flex"
  wrapperElement.style.display = "none"

});