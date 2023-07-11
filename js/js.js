function funck(){
    let x = document.getElementById('nav-bar3In');
    if(x.style.display === "block"){
        x.style.display="none";


        // document.getElementById('nav-bar2Border1').style.height = "3px";
        // document.getElementById('nav-bar2Border1').style.width = "30px";

        // document.getElementById('nav-bar2Border2').style.display = "block";

        // document.getElementById('nav-bar2Border3').style.display = "block";

    }else{
        x.style.display="block";

        // document.getElementById('nav-bar2Border1').style.height = "50px";
        // document.getElementById('nav-bar2Border1').style.width = "50px";
        // document.getElementById('nav-bar2Border1').style.borderRadius = "50px";

        // document.getElementById('nav-bar2Border2').style.display = "none";

        // document.getElementById('nav-bar2Border3').style.display = "none";
    }
}

function funck2(){
    let x = document.getElementById('nav-bar3In2');
    if(x.style.display === "block"){
        x.style.display="none";
    }else{
        x.style.display="block";
    }
}




var Margin = -2000;

function Next() {
  Margin -= 200;
  if (Margin < -2000) {
    Margin = -200;
  }
  document.getElementById("MainBox").style.marginLeft = Margin + "px";
}