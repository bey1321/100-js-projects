$(document).ready(function() {
    $("#input-date").change(function() {
        var input = this.value; // e.g. 2015-11-13
        var dateEntered = new Date(input); // e.g. Fri Nov 13 2015 00:00:00 GMT-0500 (EST)

        // Get the current date
        var currentDate = new Date();

        // Calculate age
        var age = currentDate.getFullYear() - dateEntered.getFullYear();
        var monthDifference = currentDate.getMonth() - dateEntered.getMonth();
        
        // Adjust age if the birthday has not occurred yet this year
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dateEntered.getDate())) {
            age--;
        }
        
        $("#calculator").click(function(){
            $("#output").text("You are " + age + " years old.");
        })
        
    });
});