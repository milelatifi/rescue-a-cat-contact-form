document.querySelector(".submit").addEventListener("click", validateForm);

function validateForm() {
  let name = document.querySelector("#name");
  if (name.value.length === 0) {
    name.classList.add("invalid-input");
    document.querySelector("#name-help").classList.remove("d-none");
    return;
  }

  let email = document.querySelector("#email");
  if (email.value.length === 0) {
    email.classList.add("invalid-input");
    document.querySelector("#email-help").classList.remove("d-none");
    return;
  }

  let message = document.querySelector("#message");
  if (message.value.length === 0) {
    message.classList.add("invalid-input");
    document.querySelector("#message-help").classList.remove("d-none");
    return;
  }

  document.querySelector("form").classList.add("d-none");
  document.querySelector("#thank-you-section").classList.remove("d-none");
  setTimeout(function () {
    window.location.reload();
  }, 3000);
}
