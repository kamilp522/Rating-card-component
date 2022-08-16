const rates = [...document.querySelectorAll(".rate_number")];
const submit_btn = document.querySelector(".submit_btn");
const card_rating_container = document.querySelector(".card_rating_container");
const card_thanks_container = document.querySelector(".card_thanks_container");
const selected_rate_span = document.querySelector(".selected_rate span");
let current_selected_rate = "";

submit_btn.disabled = true;

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    const current = document.getElementsByClassName("active_rate");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active_rate", "");
    }
    rate.className += " active_rate";
    current_selected_rate = rate.textContent;
    submit_btn.disabled = false;
  });
});

const showThanksCard = () => {
  card_rating_container.classList.remove("active");
  card_thanks_container.classList.add("active");
  selected_rate_span.textContent = current_selected_rate;
};

submit_btn.addEventListener("click", showThanksCard);
