

$(document).ready(function(){
    let count = 0;
    $(".orders").click(() => {
        $(".order").css("color","rgb(49, 49, 194)");
    })
    $(".balanses").click(() => {
        $(".balans").css("color","rgb(49, 49, 194)");
    })

    $(".first-icon").click(() => {
        
        $(".first-added").slideToggle();
        $(".second-added").hide();
        Counter();
        
    })
    $(".second-icon").click(() => {
       
        console.log("Click");
        $(".second-added").slideToggle();
        $(".first-added").hide();
        Counter();
    })

    $(".MuiTypography-body1").click(() => {
        
        $(".first-added").slideToggle();
        $(".MuiTypography-body1").css("color","rgb(49, 49, 194)");
        $(".MuiTypography-body2").css("color","black");
        $(".second-added").hide();
        
        Counter();
    })
    $(".MuiTypography-body2").click(() => {
        $(".second-added").slideToggle();
        $(".MuiTypography-body2").css("color","rgb(49, 49, 194)");
        $(".MuiTypography-body1").css("color","black");
        $(".first-added").hide();
        
        Counter();
    })
    function Counter(){
        count++;
        if(count % 2 === 1){
            $(".fa-solid").css("transform","rotate(180deg)");
        }
        else{
            $(".fa-solid").css("transform","rotate(0deg)");
        }

        return count;
    }
});
