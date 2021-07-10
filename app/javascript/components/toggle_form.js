const ToggleForm = () => {
  // récupère le button
  const button = document.querySelector("#toggle-form");
  const form = document.querySelector("#form");
  console.log(button);
  console.log(form);
  button.addEventListener("click", (event) => {
    form.classList.toggle("d-none");
  });
};

export { ToggleForm };
