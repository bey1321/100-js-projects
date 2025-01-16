$(document).ready(function(){
    function generateRandomColors(){
        var hexaDecimalValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        var randomNumber;
        var randomColor = '#'; //declare it as string
    
        for(var i = 0; i < 6; i++){
            randomNumber = Math.floor(Math.random() * 16);
            randomColor += hexaDecimalValues[randomNumber];
        }
    
        return randomColor;
    }
    
    $(".random-color").each(function(){
        $(this).css("background-color", generateRandomColors());
        $(this).text(generateRandomColors());
    })
})

