

/* function calculateTip() {
    var billAmount = document.getElementById("bill").value;
    var tip = document.getElementById("tip").value;

    var total = billAmount * tip / 100;
    total = Math.round(total * 100) / 100;
    total = parseInt(billAmount) +  parseInt(total);

    total = total.toFixed(2);
    var tipAmount = document.getElementById("tipAmount");
    tipAmount.innerHTML = total;
} */
const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("tipAmount");

function calculateTip() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTip);