var counter = 1;

$(".slide:not(#slide-"+counter+")").addClass("in-active");

$(".slide").click(function(){
  changeSlide();
});
$(document).keypress(function(){
  changeSlide();
})

function changeSlide(){
  $("#slide-"+counter).addClass("in-active");
    counter++;
    $("#slide-"+counter).removeClass("in-active");
    
    
  if(counter == 7){
    counter = 1;
    $(".slide:not(#slide-"+counter+")").addClass("in-active");
    $("#slide-1").removeClass("in-active");
  }
}