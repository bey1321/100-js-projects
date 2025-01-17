$(document).ready(function () {
    function toggleSteps(stepToActivate, imageToActivate, buttonToActivate) {
        // Deactivate all steps and images
        $(".step-1, .step-2, .step-3").addClass("inactive");
        $(".image-1, .image-2, .image-3").addClass("inactive");

        // Activate the selected step and image
        $(`.${stepToActivate}`).removeClass("inactive");
        $(`.${imageToActivate}`).removeClass("inactive");

        // Reset all button colors
        $("#button-1, #button-2, #button-3").css("background-color", "#F0A8D0");

        // Highlight the selected button
        $(`#${buttonToActivate}`).css("background-color", $(".description-container").css("background-color"));
    }

    // Attach event listeners to buttons
    $("#button-1").click(function () {
        toggleSteps("step-1", "image-1", "button-1");
    });

    $("#button-2").click(function () {
        toggleSteps("step-2", "image-2", "button-2");
    });

    $("#button-3").click(function () {
        toggleSteps("step-3", "image-3", "button-3");
    });
});
