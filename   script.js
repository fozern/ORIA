const toggles = document.querySelectorAll(".toggle");

toggles.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    if (content) {
      content.style.display = content.style.display === "block" ? "none" : "block";
    }
  });
});

