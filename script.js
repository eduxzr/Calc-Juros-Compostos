function openCalculator() {
    document.getElementById("calculatorPopup").style.display = "block";
}

function closeCalculator() {
    document.getElementById("calculatorPopup").style.display = "none";
}

function closeResultPopup() {
    document.getElementById("resultPopup").style.display = "none";
}

function calculateCompoundInterest() {
    const percent = parseFloat(document.getElementById("percent").value);
    const years = parseInt(document.getElementById("years").value);
    const amount = parseFloat(document.getElementById("amount").value);

    if (years > 10) {
        alert("Por favor, escolha um número de anos igual ou inferior a 10.");
        return;
    }

    const rate = percent / 100;
    const compoundInterest = amount * Math.pow(1 + rate, years);

    const resultText = `O montante total é de R$ ${compoundInterest.toFixed(2)}.`;

    document.getElementById("resultText").innerText = resultText;
    document.getElementById("resultPopup").style.display = "block";
}
