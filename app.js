function knowMyId(elem){

           document.getElementById("para1").style.color = "red" ;

        }

        function knowMyClass(){
           var ele = document.getElementsByClassName("class1")[0];
           console.log(ele);
           ele.style.color="red";
  }


           function knowbytagName(){
           var ele=document.getElementsByTagName("p")[2];
           console.log(ele);
           ele.style.color="red";
        }

        function changeMycolor(){

        document.getElementById("block1").style.cssText = "background-Color:black; color:white";

        }

        function fontsizea(){

        document.getElementById("block2").style.cssText = "font-size:0.1em; color:blue";
        }

         function mouseover(){

        document.getElementById("block3").style.cssText = "background-Color:black; color:white";
        }

          function mouseout(){

           document.getElementById("block3").style.cssText = "background-Color:white; color:black";
        }

        function hideme(){

           document.getElementById("block4").style.visibility= "hidden";
        }
        function boxcolor1(){
          document.getElementsByClassName("box1")[0].style.backgroundColor = "green";
        }

        function boxcolor2(){

          document.getElementsByClassName("box1")[1].style.backgroundColor = "green";

        }
          function boxcolor3(){

          document.getElementsByClassName("box1")[2].style.backgroundColor = "green";
        }
        function boxcolor11(){
          document.getElementsByClassName("box2")[0].style.backgroundColor = "blue";
        }

        function boxcolor12(){

          document.getElementsByClassName("box2")[1].style.backgroundColor = "blue";

        }
          function boxcolor13(){

          document.getElementsByClassName("box2")[2].style.backgroundColor = "blue";
        }

        function numbersOnly(e) {

          var charCode = e.which || e.keycode;
          if (charCode < 48 || charCode > 57) {
            return false;
          }
          return true;
        }
        function addpara() {
  var elem = document.getElementById("para2");
  elem.insertAdjacentHTML("afterend", "<p>I got generated on the fly...</p>");
}
function removePara() {
  var elem = document.getElementById("para4");
  elem.remove();
}
function myMove() {
  var elem = document.getElementById("box5");
  var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  elem.style.background = color;
}
