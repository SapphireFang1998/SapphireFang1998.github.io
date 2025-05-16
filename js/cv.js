document.addEventListener("DOMContentLoaded", () => {
  // Tab switching functionality
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab")

      // Update active tab button
      tabButtons.forEach((btn) => {
        btn.classList.remove("active")
      })
      this.classList.add("active")

      // Show the selected tab content
      tabContents.forEach((content) => {
        content.classList.remove("active")
      })
      document.getElementById(`${tabName}-tab`).classList.add("active")
    })
  })
})

