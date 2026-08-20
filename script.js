const modal = document.querySelector("#request-modal");
const requestButtons = document.querySelectorAll("[data-request]");
const requestForm = document.querySelector("#request-form");
const requestContent = document.querySelector("#request-content");
const successContent = document.querySelector("#success-content");

function openRequest() {
  requestContent.classList.remove("hidden");
  successContent.classList.add("hidden");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  modal.querySelector("input").focus();
}

function closeRequest() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

requestButtons.forEach((button) => button.addEventListener("click", openRequest));
document.querySelector("#modal-close").addEventListener("click", closeRequest);
document.querySelector("#success-close").addEventListener("click", closeRequest);
modal.addEventListener("mousedown", (event) => event.target === modal && closeRequest());
document.addEventListener("keydown", (event) => event.key === "Escape" && closeRequest());

requestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  requestContent.classList.add("hidden");
  successContent.classList.remove("hidden");
});

document.querySelector("#site-search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
});
