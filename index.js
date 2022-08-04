
      
function q1function(){
    var q1dots = document.getElementById("q1dots");
    var q1moreText = document.getElementById("q1more");
    var q1buttonText = document.getElementById("q1mybutton");

    if(q1dots.style.display === "none")
        {
            q1dots.style.display = "inline";
            q1buttonText.innerHTML = "show Answer";
            q1moreText.style.display = "none";
        }
        else{
            q1dots.style.display = "none";
            q1buttonText.innerHTML = "Hide Answer";
            q1moreText.style.display = "inline";

        }
}
   