// DETAILS ELEMENT SELECTORS
const loanAmount = document.getElementById("amount");
const interestAmount = document.getElementById("interest");
const monthsAmount = document.getElementById("years");

// RESULTS ELEMENT SELECTORS
const monthlyPay = document.getElementById("monthly");
const totalInterest = document.getElementById("total-interest");
const totalPay = document.getElementById("total-paid");

const resultFields = document.getElementById("results");
const loading = document.getElementById("loading");
const errDiv = document.getElementById("errorDiv");
const refresh = document.getElementById('refresh')

const calculateResults = () => {
  // VALUES TO CALCULATE
  const principal = parseFloat(loanAmount.value);
  const calcInterest = (parseFloat(principal) / 100) * interestAmount.value;
  const totalMonths = parseFloat(monthsAmount.value);

  // CALCULATIONS
  monthlyPay.textContent = `Monthly payments: £${((principal + calcInterest) / totalMonths).toFixed(2)}`;
  totalInterest.textContent = `Total interest: £${calcInterest.toFixed(2)}`;
  totalPay.textContent = `Total to pay: £${(principal + calcInterest).toFixed(2)}`;

  if (isFinite(totalMonths) && isFinite(calcInterest)) {
    resultFields.style.display = `flex`;
    loading.style.display = `none`;
  } else {
    showError();
  }
};

// SHOW ERROR IF DETAILS MISSING
const showError = () => {
  loading.style.display = `none`;
  resultFields.style.display = `none`;

  errDiv.textContent = `Please provide all details!`;
  errDiv.style.display = `block`;

  setTimeout(clearError, 3000);
};

const clearError = () => {
  errDiv.style.display = `none`;
};

// REFRESH FORM
refresh.addEventListener('click', () => {
  loanAmount.value = ``
  interestAmount.value = ``
  monthsAmount.value = ``

  resultFields.style.display = `none`
})

// RUN FUNCTIONS ON SUBMIT
document.getElementById("details").addEventListener("submit", (e) => {
  loading.style.display = `block`;

  setTimeout(calculateResults, 2000);
  e.preventDefault();
});
