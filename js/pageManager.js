function showCards(event){
    let target = event.target.value;
    switch(target){
        case "All":{
            $(".engineer").css("display", "block");
            $(".manager").css("display", "block");
            $(".intern").css("display", "block");
            break;
        }
        case "Engineer":{
            $(".engineer").css("display", "block");
            $(".manager").css("display", "none");
            $(".intern").css("display", "none");
            break;
        }
        case "Manager":{
            $(".engineer").css("display", "none");
            $(".manager").css("display", "block");
            $(".intern").css("display", "none");
            break;
        }
        case "Intern":{
            $(".engineer").css("display", "none");
            $(".manager").css("display", "none");
            $(".intern").css("display", "block");
            break;
        }
    }
}

$(document).ready(function(){
    $("#selector").on("click", showCards);
});