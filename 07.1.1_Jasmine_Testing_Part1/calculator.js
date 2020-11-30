const form = document.getElementById("calc-form");
let loanAmount = document.getElementById("loan-amount");
let loanYears = document.getElementById("loan-years");
let loanRate = document.getElementById("loan-rate");
let monthlyPaymentSection = document.getElementById("monthly-payment");

if (form) {
  setupIntialValues();
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    update();
    });
  };

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    loanAmount.value = '';
    loanYears.value = '';
    loanRate.value = '';
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    loanAmount = loanAmount.value;
    loanYears = loanYears.value;
    loanRate = loanRate.value;
    let currentUIValues = [loanAmount, loanYears, loanRate];
    updateMonthly(calculateMonthlyPayment(loanAmount, loanYears, loanRate));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(loanAmount, loanYears, loanRate) {
  let P = loanAmount
  let i = (loanRate / 100) / 12;
  let n = loanYears * 12;
  // values = [P, i, n];
  return (P * i / (1-((1+i)**-n))).toFixed(2);
}

function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}