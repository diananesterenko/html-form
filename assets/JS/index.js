const INPUTS_REG_EXP = {
  "user-name": /^[A-Z][a-z]{2,19}$/,
  "user-surname": /^[A-Z][a-z]{2,19}$/,
  "user-email": /^.+@.+$/,
  "user-phone-first": /^\d{3}$/,
  "user-phone-second": /^\d{3}$/,
  "user-phone-third": /^\d{4}$/,
  "user-message": /^.{1,}$/,
};
const submitForm = document.querySelector("form");
const inputs = document.querySelectorAll(".form-input");

submitForm.onsubmit = btnSubmitHandler;
inputs.forEach((i) => i.addEventListener("input", inputHandler));

function inputHandler(e) {
  if (INPUTS_REG_EXP[e.target.name].test(e.target.value)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.add("invalid");
    e.target.classList.remove("valid");
  }
}

function btnSubmitHandler(e) {
  const valuesFromInputs = {};

  valuesFromInputs.name = `${inputs[0].value} ${inputs[1].value}`;
  valuesFromInputs.email = inputs[2].value;
  valuesFromInputs.phone = `${inputs[3].value}-${inputs[4].value}-${inputs[5].value}`;
  valuesFromInputs.subject = inputs[6].value;
  valuesFromInputs.message = inputs[7].value.replace(/\s+/g, " ").trim();

  for (let key in valuesFromInputs) {
    console.log(valuesFromInputs[key]);
  }
}
