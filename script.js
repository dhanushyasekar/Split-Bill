// Set tip from quick buttons
function setTip(value) {
    document.getElementById("tip").value = value;
    calculateSplit();
}

// Main calculation function
function calculateSplit() {
    const bill = parseFloat(document.getElementById("bill").value);
    const tip = parseFloat(document.getElementById("tip").value || 0);
    const people = parseInt(document.getElementById("people").value);
    const currency = document.getElementById("currency").value;

    if (isNaN(bill) || isNaN(tip) || isNaN(people) || people <= 0) {
        document.getElementById("result").textContent = "Please enter valid inputs.";
        return;
    }

    const tipAmount = bill * (tip / 100);
    const total = bill + tipAmount;
    const perPerson = total / people;

    document.getElementById("result").textContent = `Each person pays: ${currency}${perPerson.toFixed(2)}`;
}

// Dark/Light Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", mode);
}

// Auto-calculate as user types
document.querySelectorAll("#bill, #tip, #people, #currency").forEach(input => {
    input.addEventListener("input", calculateSplit);
});

// Load theme on page load
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
};