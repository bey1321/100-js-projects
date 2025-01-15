function calculateTotal() {
    var bill = parseFloat($("#bill-amount").val());
    var tip = parseFloat($("#tip-percentage").val());

    

    // Validate inputs
    if (isNaN(bill) || isNaN(tip) || bill <= 0 || tip < 0) {
        alert("Please enter valid numbers for both Bill Amount and Tip Percentage.");
        return;
    }

    // Calculate tip amount and total
    var tipAmount = (bill * tip) / 100;
    var total = bill + tipAmount;

    // Clear previous output
    $("#total").children().remove(); // Clear the total before appending the new output

    // Display the total
    var output = '<p id="output"> $<strong>' + total.toFixed(2) + '</strong></p>';
    $("#total").append(output);
    $("#output").css("display", "inline");
}

$("#calculate-button").click(calculateTotal);