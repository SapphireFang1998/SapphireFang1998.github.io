document.addEventListener("DOMContentLoaded", () => {
  // Import Feather icons
  feather.replace()

  // Set the current year in the footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Toggle mobile menu
  const menuToggle = document.getElementById("menu-toggle")
  const navMobile = document.getElementById("nav-mobile")

  if (menuToggle && navMobile) {
    menuToggle.addEventListener("click", () => {
      navMobile.classList.toggle("active")

      // Toggle the icon between menu and x
      const icon = menuToggle.querySelector("i")
      if (icon) {
        if (navMobile.classList.contains("active")) {
          icon.setAttribute("data-feather", "x")
        } else {
          icon.setAttribute("data-feather", "menu")
        }
        feather.replace()
      }
    })
  }

  // Toggle theme
  const themeToggle = document.getElementById("theme-toggle")
  const themeToggleMobile = document.getElementById("theme-toggle-mobile")

  // Function to toggle between light and dark themes
  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  // Add event listeners for theme toggles
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }

  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", toggleTheme)
  }

  // Set theme based on localStorage or user preference
  if (
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  // Abstract toggle functionality for the research page
  const abstractButtons = document.querySelectorAll(".toggle-abstract")

  abstractButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const abstractId = this.getAttribute("data-id")
      const abstractContent = document.getElementById(`abstract-${abstractId}`)

      if (abstractContent) {
        abstractContent.classList.toggle("hidden")
        this.classList.toggle("expanded")

        // Toggle the icon between chevron-down and chevron-up
        const icon = this.querySelector(".icon-expand")
        if (icon) {
          if (this.classList.contains("expanded")) {
            icon.setAttribute("data-feather", "chevron-up")
          } else {
            icon.setAttribute("data-feather", "chevron-down")
          }
          feather.replace()
        }
      }
    })
  })

  // Tab functionality for education and CV pages
  const tabButtons = document.querySelectorAll(".tab-button")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Remove active class from all buttons and content
      document.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("active")
      })

      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active")
      })

      // Add active class to clicked button and corresponding content
      this.classList.add("active")
      document.getElementById(`${tabId}-tab`).classList.add("active")
    })
  })

  // Handle active navigation based on current page
  function setActiveNavLink() {
    const currentPath = window.location.pathname
    const navLinks = document.querySelectorAll(".nav-link")

    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href")

      if (
        currentPath.endsWith(linkPath) ||
        (linkPath === "index.html" && (currentPath === "/" || currentPath.endsWith("/")))
      ) {
        link.classList.add("active")
      } else {
        link.classList.remove("active")
      }
    })
  }

  setActiveNavLink()
})

