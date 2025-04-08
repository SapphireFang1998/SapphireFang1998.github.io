document.addEventListener("DOMContentLoaded", () => {
  // Toggle abstract visibility
  const abstractToggles = document.querySelectorAll(".abstract-toggle")

  abstractToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const pubId = this.getAttribute("data-id")
      const abstractContent = document.getElementById(`abstract-${pubId}`)

      if (abstractContent) {
        abstractContent.classList.toggle("hidden")

        // Update icon
        const icon = this.querySelector("i")
        if (abstractContent.classList.contains("hidden")) {
          icon.classList.remove("fa-chevron-up")
          icon.classList.add("fa-chevron-down")
        } else {
          icon.classList.remove("fa-chevron-down")
          icon.classList.add("fa-chevron-up")
        }
      }
    })
  })

  // Toggle citation visibility
  const citationToggles = document.querySelectorAll(".citation-toggle")

  citationToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const pubId = this.getAttribute("data-id")
      const citationContent = document.getElementById(`citation-${pubId}`)

      if (citationContent) {
        citationContent.classList.toggle("hidden")

        // Update icon
        const icon = this.querySelector("i")
        if (citationContent.classList.contains("hidden")) {
          icon.classList.remove("fa-chevron-up")
          icon.classList.add("fa-chevron-down")
        } else {
          icon.classList.remove("fa-chevron-down")
          icon.classList.add("fa-chevron-up")
        }
      }
    })
  })

  // Copy citation to clipboard
  const copyButtons = document.querySelectorAll(".copy-btn")

  copyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const citationId = this.getAttribute("data-citation")
      const citationText = document.getElementById(`citation-text-${citationId}`).textContent

      navigator.clipboard
        .writeText(citationText)
        .then(() => {
          // Update button text temporarily
          const originalHTML = this.innerHTML
          this.innerHTML = '<i class="fas fa-check"></i> Copied'

          setTimeout(() => {
            this.innerHTML = originalHTML
          }, 2000)

          // Show toast notification (simple implementation)
          const toast = document.createElement("div")
          toast.className = "toast"
          toast.innerHTML = `
          <div class="toast-content">
            <div class="toast-title">Copied to clipboard</div>
            <div class="toast-description">The citation has been copied to your clipboard.</div>
          </div>
        `
          document.body.appendChild(toast)

          setTimeout(() => {
            toast.classList.add("show")
          }, 100)

          setTimeout(() => {
            toast.classList.remove("show")
            setTimeout(() => {
              document.body.removeChild(toast)
            }, 300)
          }, 3000)
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err)
        })
    })
  })
})

