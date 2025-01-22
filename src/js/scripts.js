document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded.");

  const form = document.getElementById("container-form");
  const ready = document.getElementById("container-ready");
  const buttonGenerate = document.getElementById("button-generate");

  buttonGenerate.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Clicked");

    form.classList.toggle("hidden")
    ready.classList.toggle("hidden")
  });
});
