function groceryTracker(amount1, amount2, amount3) {
    // Calculate the total amount
    const totalAmount = amount1 + amount2 + amount3;

    // Display the total amount
    document.getElementById("totalAmount").innerHTML = "Total Amount: $" + totalAmount.toFixed(2);
}

function calculateTotal() {
    // Get the values entered by users
    const amount1 = parseFloat(document.getElementById("grocery1").value) || 0;
    const amount2 = parseFloat(document.getElementById("grocery2").value) || 0;
    const amount3 = parseFloat(document.getElementById("grocery3").value) || 0;

    // Call the groceryTracker function with the entered amounts
    groceryTracker(amount1, amount2, amount3);
}
