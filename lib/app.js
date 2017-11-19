$(document).ready(function(){
    addClick();
});

function addClick() {
    $("nav a").click(function(e){
        e.preventDefault();//anchor tags stopped working in order to animate them below
        var sectionID=e.currentTarget.id +"Section";
        
        $("html, body").animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 1000)
      
    })
}