
//function for home page .
function name_input(){
    var U_name = document.getElementById("name").value;
    document.getElementById("u_name").innerHTML ="Hello !"+ U_name ;
    document.getElementById("category").style.display = "block";
    document.getElementById("age").style.display="none" 
}
// function for pipe and cistern selection page ;
function pipe(){
    document.getElementById("home").style.display = "none"; 
    document.getElementById("category").style.display = "none"; 
    document.getElementById("pipe&cistern").style.display = "block";//make block pc case
    document.getElementById("p&c1").style.display = "block";
    //time for one question .
    let time1 = 0 ;
 for(i = 0 ; i<1; i++){
    function timer(){
       let displaytime= time1+=i;
       document.getElementById("time1").innerHTML ="You Have" +" " + displaytime +"sec";
       if(displaytime == 15){
        clearInterval( myTime)
        document.getElementById("buttonpc1").style.display = "none";
        document.getElementById("timeout1").innerHTML = "Time Up !"
       }

    }
 }
 
 let myTime= setInterval(timer , 1000)
 
}



 function buttoneffectpc1 (){
       document.getElementById("wpc11").style.backgroundColor = "red";
       document.getElementById("wpc12").style.backgroundColor = "red"; 
       document.getElementById("wpc13").style.backgroundColor = "red";
       document.getElementById("cpc1").style.backgroundColor = "green";   
 }


    

function nextpc1 (){
    document.getElementById("home").style.display = "none"; 
    document.getElementById("category").style.display = "none"; 
    document.getElementById("pipe&cistern").style.display = "block";//make block pc case
    document.getElementById("p&c1").style.display = "none";
    document.getElementById("time1").style.display="none";

    document.getElementById("p&c2").style.display = "block";
    //time for one question .
    let time2 = 0 ;
 for(i = 0 ; i<1; i++){
    function timer(){
       let displaytime= time2+=i;
       document.getElementById("time2").innerHTML ="You Have" +" " + displaytime +"sec";
       if(displaytime == 15){
        clearInterval( myTime)
        document.getElementById("buttonpc2").style.display = "none";
        document.getElementById("timeout2").innerHTML = "Time Up !"
       }

    }
 } 
 let myTime= setInterval(timer , 1000)
}
 function buttoneffectpc2 (){
   document.getElementById("wpc21").style.backgroundColor = "red";
   document.getElementById("wpc22").style.backgroundColor = "red"; 
   document.getElementById("wpc23").style.backgroundColor = "red";
   document.getElementById("cpc2").style.backgroundColor = "green";   
}
 
 


function nextpc2 () {
    document.getElementById("home").style.display = "none"; 
    document.getElementById("category").style.display = "none"; 
    document.getElementById("pipe&cistern").style.display = "block";//make block pc case
    document.getElementById("p&c1").style.display = "none";
    document.getElementById("p&c2").style.display = "none";
    document.getElementById("time2").style.display="none";

    document.getElementById("p&c3").style.display = "block";
    //time for one question .
    let time3 = 0 ;
 for(i = 0 ; i<1; i++){
    function timer(){
       let displaytime= time3+=i;
       document.getElementById("time3").innerHTML ="You Have" +" " + displaytime +"sec";
       if(displaytime == 15){
        clearInterval( myTime)
        document.getElementById("buttonpc3").style.display = "none";
        document.getElementById("timeout3").innerHTML = "Time Up !"
       }

    }
 } 
 let myTime= setInterval(timer , 1000)
}
 function buttoneffectpc3 (){
   document.getElementById("wpc31").style.backgroundColor = "red";
   document.getElementById("wpc32").style.backgroundColor = "red"; 
   document.getElementById("wpc33").style.backgroundColor = "red";
   document.getElementById("cpc3").style.backgroundColor = "green";   
}
 
 

function nextpc3 () {
    document.getElementById("home").style.display = "none"; 
    document.getElementById("category").style.display = "none"; 
    document.getElementById("pipe&cistern").style.display = "block";//make block pc case
    document.getElementById("p&c1").style.display = "none";
    document.getElementById("p&c2").style.display = "none";
    document.getElementById("p&c3").style.display = "none";
    document.getElementById("time3").style.display="none";
 
    document.getElementById("p&c4").style.display = "block";
    //time for one question .
    let time4 = 0 ;
 for(i = 0 ; i<1; i++){
    function timer(){
       let displaytime= time4+=i;
       document.getElementById("time4").innerHTML ="You Have" +" " + displaytime +"sec";
       if(displaytime == 15){
        clearInterval( myTime)
        document.getElementById("buttonpc4").style.display = "none";
        document.getElementById("timeout4").innerHTML = "Time Up !"
       }

    }
 } 
 let myTime= setInterval(timer , 1000)
}
 function buttoneffectpc4 (){ //button effect
   document.getElementById("wpc41").style.backgroundColor = "red";
   document.getElementById("wpc42").style.backgroundColor = "red"; 
   document.getElementById("wpc43").style.backgroundColor = "red";
   document.getElementById("cpc4").style.backgroundColor = "green";   
}
 
 

function nextpc4 () {
    document.getElementById("home").style.display = "none"; 
    document.getElementById("category").style.display = "none"; 
    document.getElementById("pipe&cistern").style.display = "block";//make block pc case
    document.getElementById("p&c1").style.display = "none";
    document.getElementById("p&c2").style.display = "none";
    document.getElementById("p&c3").style.display = "none"; 
    document.getElementById("p&c4").style.display = "none";
    document.getElementById("time4").style.display="none";
 
    document.getElementById("p&c5").style.display = "block";
    //time for one question .
    let time5 = 0 ;
 for(i = 0 ; i<1; i++){
    function timer(){
       let displaytime= time5+=i;
       document.getElementById("time5").innerHTML ="You Have" +" " + displaytime +"sec";
       if(displaytime == 15){
        clearInterval( myTime)
        document.getElementById("buttonpc5").style.display = "none";
        document.getElementById("timeout5").innerHTML = "Time Up !"
       }

    }
 } 
 let myTime= setInterval(timer , 1000)
}
 function buttoneffectpc5 (){ //button effect
   document.getElementById("wpc51").style.backgroundColor = "red";
   document.getElementById("wpc52").style.backgroundColor = "red"; 
   document.getElementById("wpc53").style.backgroundColor = "red";
   document.getElementById("cpc5").style.backgroundColor = "green";   
}
 

 

function nextpc5 () {
    document.getElementById("home").style.display = "none"; 
    document.getElementById("category").style.display = "none"; 
    document.getElementById("pipe&cistern").style.display = "block";//make block pc case
    document.getElementById("p&c1").style.display = "none";
    document.getElementById("p&c2").style.display = "none";
    document.getElementById("p&c3").style.display = "none"; 
    document.getElementById("p&c4").style.display = "none"; 
    document.getElementById("p&c5").style.display = "none";
    document.getElementById("time5").style.display="none";

    document.getElementById("p&c6").style.display = "block";
    //time for one question .
    let time6 = 0 ;
 for(i = 0 ; i<1; i++){
    function timer(){
       let displaytime= time6+=i;
       document.getElementById("time6").innerHTML ="You Have" +" " + displaytime +"sec";
       if(displaytime == 15){
        clearInterval( myTime)
        document.getElementById("buttonpc6").style.display = "none";
        document.getElementById("timeout6").innerHTML = "Time Up !"
       }

    }
 }
 
 let myTime= setInterval(timer , 1000)
}
 function buttoneffectpc6 (){ //button effect
   document.getElementById("wpc61").style.backgroundColor = "red";
   document.getElementById("wpc62").style.backgroundColor = "red"; 
   document.getElementById("wpc63").style.backgroundColor = "red";
   document.getElementById("cpc6").style.backgroundColor = "green";   
}
 
 

 

function nextpc6 () {
    document.getElementById("home").style.display = "none"; 
    document.getElementById("category").style.display = "none"; 
    document.getElementById("pipe&cistern").style.display = "block";//make block pc case
    document.getElementById("p&c1").style.display = "none";
    document.getElementById("p&c2").style.display = "none";
    document.getElementById("p&c3").style.display = "none"; 
    document.getElementById("p&c4").style.display = "none"; 
    document.getElementById("p&c5").style.display = "none";
    document.getElementById("p&c6").style.display = "none";
    document.getElementById("time6").style.display="none";

    document.getElementById("p&c7").style.display = "block";
    //time for one question .
    let time7 = 0 ;
 for(i = 0 ; i<1; i++){
    function timer(){
       let displaytime= time7+=i;
       document.getElementById("time7").innerHTML ="You Have" +" " + displaytime +"sec";
       if(displaytime == 15){
        clearInterval( myTime)
        document.getElementById("buttonpc7").style.display = "none";
        document.getElementById("timeout7").innerHTML = "Time Up !"
       }

    }
 } 
 let myTime= setInterval(timer , 1000)
}
 function buttoneffectpc7 (){ //button effect
   document.getElementById("wpc71").style.backgroundColor = "red";
   document.getElementById("wpc72").style.backgroundColor = "red"; 
   document.getElementById("wpc73").style.backgroundColor = "red";
   document.getElementById("cpc7").style.backgroundColor = "green";   
}
 
 

function nextpc7 () {
    document.getElementById("home").style.display = "none"; 
    document.getElementById("category").style.display = "none"; 
    document.getElementById("pipe&cistern").style.display = "block";//make block pc case
    document.getElementById("p&c1").style.display = "none";
    document.getElementById("p&c2").style.display = "none";
    document.getElementById("p&c3").style.display = "none"; 
    document.getElementById("p&c4").style.display = "none"; 
    document.getElementById("p&c5").style.display = "none";
    document.getElementById("p&c6").style.display = "none";
    document.getElementById("p&c7").style.display = "none";
    document.getElementById("time7").style.display="none";
 
    document.getElementById("p&c8").style.display = "block";
    //time for one question .
    let time7 = 0 ;
 for(i = 0 ; i<1; i++){
    function timer(){
       let displaytime= time7+=i;
       document.getElementById("time8").innerHTML ="You Have" +" " + displaytime +"sec";
       if(displaytime == 15){
        clearInterval( myTime)
        document.getElementById("buttonpc8").style.display = "none";
        document.getElementById("timeout8").innerHTML = "Time Up !"
       }

    }
 } 
 let myTime= setInterval(timer , 1000)
}
 function buttoneffectpc8 (){ //button effect
   document.getElementById("wpc81").style.backgroundColor = "red";
   document.getElementById("wpc82").style.backgroundColor = "red"; 
   document.getElementById("wpc83").style.backgroundColor = "red";
   document.getElementById("cpc8").style.backgroundColor = "green";   
}
 

function nextpc8 () {
    document.getElementById("home").style.display = "none"; 
    document.getElementById("category").style.display = "none"; 
    document.getElementById("pipe&cistern").style.display = "block";//make block pc case
    document.getElementById("p&c1").style.display = "none";
    document.getElementById("p&c2").style.display = "none";
    document.getElementById("p&c3").style.display = "none"; 
    document.getElementById("p&c4").style.display = "none"; 
    document.getElementById("p&c5").style.display = "none";
    document.getElementById("p&c6").style.display = "none";
    document.getElementById("p&c7").style.display = "none"; 
    document.getElementById("p&c8").style.display = "none";
    document.getElementById("time8").style.display="none";

    document.getElementById("p&c9").style.display = "block"; 
    //time for one question .
    let time8 = 0 ;
 for(i = 0 ; i<1; i++){
    function timer(){
       let displaytime= time8+=i;
       document.getElementById("time9").innerHTML ="You Have" +" " + displaytime +"sec";
       if(displaytime == 15){
        clearInterval( myTime)
        document.getElementById("buttonpc9").style.display = "none";
        document.getElementById("timeout9").innerHTML = "Time Up !"
       }

    }
 } 
 let myTime= setInterval(timer , 1000)
}
 function buttoneffectpc9 (){ //button effect
   document.getElementById("wpc91").style.backgroundColor = "red";
   document.getElementById("wpc92").style.backgroundColor = "red"; 
   document.getElementById("wpc93").style.backgroundColor = "red";
   document.getElementById("cpc9").style.backgroundColor = "green";   
}
function nextpc9 () {
    document.getElementById("home").style.display = "none"; 
    document.getElementById("category").style.display = "none"; 
    document.getElementById("pipe&cistern").style.display = "block";//make block pc case
    document.getElementById("p&c1").style.display = "none";
    document.getElementById("p&c2").style.display = "none";
    document.getElementById("p&c3").style.display = "none"; 
    document.getElementById("p&c4").style.display = "none"; 
    document.getElementById("p&c5").style.display = "none";
    document.getElementById("p&c6").style.display = "none";
    document.getElementById("p&c7").style.display = "none"; 
    document.getElementById("p&c8").style.display = "none";
    document.getElementById("p&c9").style.display = "none";
    document.getElementById("time9").style.display="none";
 
    document.getElementById("p&c10").style.display = "block";
    //time for one question .
    let time9 = 0 ;
 for(i = 0 ; i<1; i++){
    function timer(){
       let displaytime= time9+=i;
       document.getElementById("time10").innerHTML ="You Have" +" " + displaytime +"sec";
       if(displaytime == 15){
        clearInterval( myTime)
        document.getElementById("buttonpc10").style.display = "none";
        document.getElementById("timeout10").innerHTML = "Time Up !"
       }

    }
 } 
 let myTime= setInterval(timer , 1000)
}

 function buttoneffectpc10 (){ //button effect
   document.getElementById("wpc101").style.backgroundColor = "red";
   document.getElementById("wpc102").style.backgroundColor = "red"; 
   document.getElementById("wpc103").style.backgroundColor = "red";
   document.getElementById("cpc10").style.backgroundColor = "green";   
}
var score = 0 ;
 for(i = 0 ; i<1; i++){
    function correct(){
       var displayscore= score+=i;
       document.getElementById("score").innerHTML ="Score" + displayscore; 
 }
 }
 var totaltimer1 = 0;
 for(i = 0 ; i<1; i++){
   function alltimer1(){
      let displaytime= totaltimer1+=i;
      //document.getElementById("TT").innerHTML ="You Have Get" +" " + displaytime +"sec";


      }
} 
var total1= setInterval(alltimer1 , 1000)



 //Result Page . 
 function onsubmit1(){
   clearInterval(total1)
   document.getElementById("home").style.display = "none"; 
    document.getElementById("category").style.display = "none"; 
    document.getElementById("pipe&cistern").style.display = "none";//make block pc case
    document.getElementById("p&c1").style.display = "none";
    document.getElementById("p&c2").style.display = "none";
    document.getElementById("p&c3").style.display = "none"; 
    document.getElementById("p&c4").style.display = "none"; 
   document.getElementById("p&c5").style.display = "none";
    document.getElementById("p&c6").style.display = "none";
    document.getElementById("p&c7").style.display = "none"; 
    document.getElementById("p&c8").style.display = "none";
    document.getElementById("p&c9").style.display = "none";
    document.getElementById("time9").style.display="none";
   document.getElementById("result").style.display = "block";
   var U_name = document.getElementById("name").value;
   document.getElementById("f_name").innerHTML = "Hello"+" "+U_name + " "+ "Your Result Is" ;
  document.getElementById("TT").innerHtml = "total Time Taken"+ totaltimer1;
     
}
//profit and Loss.


//function for home page .
// function name_input(){
//    var U_name = document.getElementById("name").value;
//    document.getElementById("u_name").innerHTML ="Hello !"+ U_name ;
//    document.getElementById("category").style.display = "block"; 
// }
// function for profit and Loss  selection page ;
function profit(){
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("profit&loss").style.display = "block";//make block pc case
   document.getElementById("p&l1").style.display = "block";
   //time for one question .
   let time1 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time1+=i;
      document.getElementById("timepl1").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonpl1").style.display = "none";
       document.getElementById("timeoutpl1").innerHTML = "Time Up !"
      }

   }
}

let myTime= setInterval(timer , 1000)

}



function buttoneffectpl1 (){
      document.getElementById("wpl11").style.backgroundColor = "red";
      document.getElementById("wpl12").style.backgroundColor = "red"; 
      document.getElementById("wpl13").style.backgroundColor = "red";
      document.getElementById("cpl1").style.backgroundColor = "green";   
}


   

function nextpl1 (){
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("profit&loss").style.display = "block";//make block pc case
   document.getElementById("p&l1").style.display = "none";
   document.getElementById("timepl1").style.display="none";

   document.getElementById("p&l2").style.display = "block";
   //time for one question .
   let time2 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time2+=i;
      document.getElementById("timepl2").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonpl2").style.display = "none";
       document.getElementById("timeoutpl2").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectpl2(){
  document.getElementById("wpl21").style.backgroundColor = "red";
  document.getElementById("wpl22").style.backgroundColor = "red"; 
  document.getElementById("wpl23").style.backgroundColor = "red";
  document.getElementById("cpl2").style.backgroundColor = "green";   
}




function nextpl2 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("profit&loss").style.display = "block";//make block pc case
   document.getElementById("p&l1").style.display = "none";
   document.getElementById("p&l2").style.display = "none";
   document.getElementById("timepl2").style.display="none";

   document.getElementById("p&l3").style.display = "block";
   //time for one question .
   let time3 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time3+=i;
      document.getElementById("timepl3").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonpl3").style.display = "none";
       document.getElementById("timeoutpl3").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectpl3 (){
  document.getElementById("wpl31").style.backgroundColor = "red";
  document.getElementById("wpl32").style.backgroundColor = "red"; 
  document.getElementById("wpl33").style.backgroundColor = "red";
  document.getElementById("cpl3").style.backgroundColor = "green";   
}



function nextpl3 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("profit&loss").style.display = "block";//make block pc case
   document.getElementById("p&l1").style.display = "none";
   document.getElementById("p&l2").style.display = "none";
   document.getElementById("p&l3").style.display = "none";
   document.getElementById("timepl3").style.display="none";

   document.getElementById("p&l4").style.display = "block";
   //time for one question .
   let time4 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time4+=i;
      document.getElementById("timepl4").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonpl4").style.display = "none";
       document.getElementById("timeoutpl4").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectpl4 (){ //button effect
  document.getElementById("wpl41").style.backgroundColor = "red";
  document.getElementById("wpl42").style.backgroundColor = "red"; 
  document.getElementById("wpl43").style.backgroundColor = "red";
  document.getElementById("cpl4").style.backgroundColor = "green";   
}



function nextpl4 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("profit&loss").style.display = "block";//make block pc case
   document.getElementById("p&l1").style.display = "none";
   document.getElementById("p&l2").style.display = "none";
   document.getElementById("p&l3").style.display = "none"; 
   document.getElementById("p&l4").style.display = "none";
   document.getElementById("timepl4").style.display="none";

   document.getElementById("p&l5").style.display = "block";
   //time for one question .
   let time5 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time5+=i;
      document.getElementById("timepl5").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonpl5").style.display = "none";
       document.getElementById("timeoutpl5").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectpl5 (){ //button effect
  document.getElementById("wpl51").style.backgroundColor = "red";
  document.getElementById("wpl52").style.backgroundColor = "red"; 
  document.getElementById("wpl53").style.backgroundColor = "red";
  document.getElementById("cpl5").style.backgroundColor = "green";   
}




function nextpl5 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("profit&loss").style.display = "block";//make block pc case
   document.getElementById("p&l1").style.display = "none";
   document.getElementById("p&l2").style.display = "none";
   document.getElementById("p&l3").style.display = "none"; 
   document.getElementById("p&l4").style.display = "none"; 
   document.getElementById("p&l5").style.display = "none";
   document.getElementById("timepl5").style.display="none";

   document.getElementById("p&l6").style.display = "block";
   //time for one question .
   let time6 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time6+=i;
      document.getElementById("timepl6").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonpl6").style.display = "none";
       document.getElementById("timeoutpl6").innerHTML = "Time Up !"
      }

   }
}

let myTime= setInterval(timer , 1000)
}
function buttoneffectpl6 (){ //button effect
  document.getElementById("wpl61").style.backgroundColor = "red";
  document.getElementById("wpl62").style.backgroundColor = "red"; 
  document.getElementById("wpl63").style.backgroundColor = "red";
  document.getElementById("cpl6").style.backgroundColor = "green";   
}





function nextpl6 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("profit&loss").style.display = "block";//make block pc case
   document.getElementById("p&l1").style.display = "none";
   document.getElementById("p&l2").style.display = "none";
   document.getElementById("p&l3").style.display = "none"; 
   document.getElementById("p&l4").style.display = "none"; 
   document.getElementById("p&l5").style.display = "none";
   document.getElementById("p&l6").style.display = "none";
   document.getElementById("timepl6").style.display="none";

   document.getElementById("p&l7").style.display = "block";
   //time for one question .
   let time7 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time7+=i;
      document.getElementById("timepl7").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonpl7").style.display = "none";
       document.getElementById("timeoutpl7").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectpl7 (){ //button effect
  document.getElementById("wpl71").style.backgroundColor = "red";
  document.getElementById("wpl72").style.backgroundColor = "red"; 
  document.getElementById("wpl73").style.backgroundColor = "red";
  document.getElementById("cpl7").style.backgroundColor = "green";   
}



function nextpl7 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("profit&loss").style.display = "block";//make block pc case
   document.getElementById("p&l1").style.display = "none";
   document.getElementById("p&l2").style.display = "none";
   document.getElementById("p&l3").style.display = "none"; 
   document.getElementById("p&l4").style.display = "none"; 
   document.getElementById("p&l5").style.display = "none";
   document.getElementById("p&l6").style.display = "none";
   document.getElementById("p&l7").style.display = "none";
   document.getElementById("timepl7").style.display="none";

   document.getElementById("p&l8").style.display = "block";
   //time for one question .
   let time7 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time7+=i;
      document.getElementById("timepl8").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonpl8").style.display = "none";
       document.getElementById("timeoutpl8").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectpl8 (){ //button effect
  document.getElementById("wpl81").style.backgroundColor = "red";
  document.getElementById("wpl82").style.backgroundColor = "red"; 
  document.getElementById("wpl83").style.backgroundColor = "red";
  document.getElementById("cpl8").style.backgroundColor = "green";   
}


function nextpl8 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("profit&loss").style.display = "block";//make block pc case
   document.getElementById("p&l1").style.display = "none";
   document.getElementById("p&l2").style.display = "none";
   document.getElementById("p&l3").style.display = "none"; 
   document.getElementById("p&l4").style.display = "none"; 
   document.getElementById("p&l5").style.display = "none";
   document.getElementById("p&l6").style.display = "none";
   document.getElementById("p&l7").style.display = "none"; 
   document.getElementById("p&l8").style.display = "none";
   document.getElementById("timepl8").style.display="none";

   document.getElementById("p&l9").style.display = "block"; 
   //time for one question .
   let time8 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time8+=i;
      document.getElementById("timepl9").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonpl9").style.display = "none";
       document.getElementById("timeoutpl9").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectpl9 (){ //button effect
  document.getElementById("wpl91").style.backgroundColor = "red";
  document.getElementById("wpl92").style.backgroundColor = "red"; 
  document.getElementById("wpl93").style.backgroundColor = "red";
  document.getElementById("cpl9").style.backgroundColor = "green";   
}
function nextpl9 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("profit&loss").style.display = "block";//make block pc case
   document.getElementById("p&l1").style.display = "none";
   document.getElementById("p&l2").style.display = "none";
   document.getElementById("p&l3").style.display = "none"; 
   document.getElementById("p&l4").style.display = "none"; 
   document.getElementById("p&l5").style.display = "none";
   document.getElementById("p&l6").style.display = "none";
   document.getElementById("p&l7").style.display = "none"; 
   document.getElementById("p&l8").style.display = "none";
   document.getElementById("p&l9").style.display = "none";
   document.getElementById("timepl9").style.display="none";

   document.getElementById("p&l10").style.display = "block";
   //time for one question .
   let time9 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time9+=i;
      document.getElementById("timepl10").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonpl10").style.display = "none";
       document.getElementById("timeoutpl10").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}

function buttoneffectpl10 (){ //button effect
  document.getElementById("wpl101").style.backgroundColor = "red";
  document.getElementById("wpl102").style.backgroundColor = "red"; 
  document.getElementById("wpl103").style.backgroundColor = "red";
  document.getElementById("cpl10").style.backgroundColor = "green";   
}
var scorepl = 0 ;
for(i = 0 ; i<1; i++){
   function correctpl(){
      var displayscore= scorepl+=i;
      document.getElementById("scorepl").innerHTML ="Score" + displayscore; 
}
}
var totaltimerpl1 = 0;
for(i = 0 ; i<1; i++){
  function alltimerpl1(){
     let displaytime= totaltimer1+=i;
     document.getElementById("TTpl").innerHTML ="You Have Get" +" " + displaytime +"sec";


     }
} 
var totalpl1= setInterval(alltimerpl1 , 1000);



//Result Page . 
function onsubmit2(){
  clearInterval(totalpl1)
  document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("profit&loss").style.display = "none";//make block pc case
   document.getElementById("p&l1").style.display = "none";
   document.getElementById("p&l2").style.display = "none";
   document.getElementById("p&l3").style.display = "none"; 
   document.getElementById("p&l4").style.display = "none"; 
  document.getElementById("p&l5").style.display = "none";
   document.getElementById("p&l6").style.display = "none";
   document.getElementById("p&l7").style.display = "none"; 
   document.getElementById("p&l8").style.display = "none";
   document.getElementById("p&l9").style.display = "none";
   document.getElementById("timepl9").style.display="none";
  document.getElementById("resultpl").style.display = "block";
  var U_name = document.getElementById("name").value;
  document.getElementById("f_name").innerHTML = "Hello"+" "+U_name + " "+ "Your Result Is" ;
 }
 //probability script .

 
// //function for home page .
// function name_input(){
//    var U_name = document.getElementById("name").value;
//    document.getElementById("u_name").innerHTML ="Hello !"+ U_name ;
//    document.getElementById("category").style.display = "block"; 
// }
// function for pipe and cistern selection page ;
function prob(){
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("probability").style.display = "block";//make block pc case
   document.getElementById("p1").style.display = "block";
   //time for one question .
   let time1 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time1+=i;
      document.getElementById("timep1").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonp1").style.display = "none";
       document.getElementById("timeoutp1").innerHTML = "Time Up !"
      }

   }
}

let myTime= setInterval(timer , 1000)

}



function buttoneffectp1 (){
      document.getElementById("wp11").style.backgroundColor = "red";
      document.getElementById("wp12").style.backgroundColor = "red"; 
      document.getElementById("wp13").style.backgroundColor = "red";
      document.getElementById("cp1").style.backgroundColor = "green";   
}


   

function nextp1 (){
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("probability").style.display = "block";//make block pc case
   document.getElementById("p1").style.display = "none";
   document.getElementById("timep1").style.display="none";

   document.getElementById("p2").style.display = "block";
   //time for one question .
   let time2 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time2+=i;
      document.getElementById("timep2").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonp2").style.display = "none";
       document.getElementById("timeoutp2").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectp2 (){
  document.getElementById("wp21").style.backgroundColor = "red";
  document.getElementById("wp22").style.backgroundColor = "red"; 
  document.getElementById("wp23").style.backgroundColor = "red";
  document.getElementById("cp2").style.backgroundColor = "green";   
}




function nextp2 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("probability").style.display = "block";//make block pc case
   document.getElementById("p1").style.display = "none";
   document.getElementById("p2").style.display = "none";
   document.getElementById("timep2").style.display="none";

   document.getElementById("p3").style.display = "block";
   //time for one question .
   let time3 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time3+=i;
      document.getElementById("timep3").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonpc3").style.display = "none";
       document.getElementById("timeoutp3").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectp3 (){
  document.getElementById("wp31").style.backgroundColor = "red";
  document.getElementById("wp32").style.backgroundColor = "red"; 
  document.getElementById("wp33").style.backgroundColor = "red";
  document.getElementById("cp3").style.backgroundColor = "green";   
}



function nextp3 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("probability").style.display = "block";//make block pc case
   document.getElementById("p1").style.display = "none";
   document.getElementById("p2").style.display = "none";
   document.getElementById("p3").style.display = "none";
   document.getElementById("timep3").style.display="none";

   document.getElementById("p4").style.display = "block";
   //time for one question .
   let time4 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time4+=i;
      document.getElementById("timep4").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonp4").style.display = "none";
       document.getElementById("timeoutp4").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectp4 (){ //button effect
  document.getElementById("wp41").style.backgroundColor = "red";
  document.getElementById("wp42").style.backgroundColor = "red"; 
  document.getElementById("wp43").style.backgroundColor = "red";
  document.getElementById("cp4").style.backgroundColor = "green";   
}



function nextp4 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("probability").style.display = "block";//make block pc case
   document.getElementById("p1").style.display = "none";
   document.getElementById("p2").style.display = "none";
   document.getElementById("p3").style.display = "none"; 
   document.getElementById("p4").style.display = "none";
   document.getElementById("timep4").style.display="none";

   document.getElementById("p5").style.display = "block";
   //time for one question .
   let time5 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time5+=i;
      document.getElementById("timep5").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonp5").style.display = "none";
       document.getElementById("timeoutp5").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectp5 (){ //button effect
  document.getElementById("wp51").style.backgroundColor = "red";
  document.getElementById("wp52").style.backgroundColor = "red"; 
  document.getElementById("wp53").style.backgroundColor = "red";
  document.getElementById("cp5").style.backgroundColor = "green";   
}




function nextp5 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("probability").style.display = "block";//make block pc case
   document.getElementById("p1").style.display = "none";
   document.getElementById("p2").style.display = "none";
   document.getElementById("p3").style.display = "none"; 
   document.getElementById("p4").style.display = "none"; 
   document.getElementById("p5").style.display = "none";
   document.getElementById("timep5").style.display="none";

   document.getElementById("p6").style.display = "block";
   //time for one question .
   let time6 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time6+=i;
      document.getElementById("timep6").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonp6").style.display = "none";
       document.getElementById("timeoutp6").innerHTML = "Time Up !"
      }

   }
}

let myTime= setInterval(timer , 1000)
}
function buttoneffectp6 (){ //button effect
  document.getElementById("wp61").style.backgroundColor = "red";
  document.getElementById("wp62").style.backgroundColor = "red"; 
  document.getElementById("wp63").style.backgroundColor = "red";
  document.getElementById("cp6").style.backgroundColor = "green";   
}





function nextp6 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("probability").style.display = "block";//make block pc case
   document.getElementById("p1").style.display = "none";
   document.getElementById("p2").style.display = "none";
   document.getElementById("p3").style.display = "none"; 
   document.getElementById("p4").style.display = "none"; 
   document.getElementById("p5").style.display = "none";
   document.getElementById("p6").style.display = "none";
   document.getElementById("timep6").style.display="none";

   document.getElementById("p7").style.display = "block";
   //time for one question .
   let time7 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time7+=i;
      document.getElementById("timep7").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonp7").style.display = "none";
       document.getElementById("timeoutp7").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectp7 (){ //button effect
  document.getElementById("wp71").style.backgroundColor = "red";
  document.getElementById("wp72").style.backgroundColor = "red"; 
  document.getElementById("wp73").style.backgroundColor = "red";
  document.getElementById("cp7").style.backgroundColor = "green";   
}



function nextp7 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("probability").style.display = "block";//make block pc case
   document.getElementById("p1").style.display = "none";
   document.getElementById("p2").style.display = "none";
   document.getElementById("p3").style.display = "none"; 
   document.getElementById("p4").style.display = "none"; 
   document.getElementById("p5").style.display = "none";
   document.getElementById("p6").style.display = "none";
   document.getElementById("p7").style.display = "none";
   document.getElementById("timep7").style.display="none";

   document.getElementById("p8").style.display = "block";
   //time for one question .
   let time7 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time7+=i;
      document.getElementById("timep8").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonp8").style.display = "none";
       document.getElementById("timeoutp8").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectp8 (){ //button effect
  document.getElementById("wp81").style.backgroundColor = "red";
  document.getElementById("wp82").style.backgroundColor = "red"; 
  document.getElementById("wp83").style.backgroundColor = "red";
  document.getElementById("cp8").style.backgroundColor = "green";   
}


function nextp8 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("probability").style.display = "block";//make block pc case
   document.getElementById("p1").style.display = "none";
   document.getElementById("p2").style.display = "none";
   document.getElementById("p3").style.display = "none"; 
   document.getElementById("p4").style.display = "none"; 
   document.getElementById("p5").style.display = "none";
   document.getElementById("p6").style.display = "none";
   document.getElementById("p7").style.display = "none"; 
   document.getElementById("p8").style.display = "none";
   document.getElementById("timep8").style.display="none";

   document.getElementById("p9").style.display = "block"; 
   //time for one question .
   let time8 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time8+=i;
      document.getElementById("timep9").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonp9").style.display = "none";
       document.getElementById("timeoutp9").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}
function buttoneffectp9 (){ //button effect
  document.getElementById("wp91").style.backgroundColor = "red";
  document.getElementById("wp92").style.backgroundColor = "red"; 
  document.getElementById("wp93").style.backgroundColor = "red";
  document.getElementById("cp9").style.backgroundColor = "green";   
}
function nextp9 () {
   document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("probability").style.display = "block";//make block pc case
   document.getElementById("p1").style.display = "none";
   document.getElementById("p2").style.display = "none";
   document.getElementById("p3").style.display = "none"; 
   document.getElementById("p4").style.display = "none"; 
   document.getElementById("p5").style.display = "none";
   document.getElementById("p6").style.display = "none";
   document.getElementById("p7").style.display = "none"; 
   document.getElementById("p8").style.display = "none";
   document.getElementById("p9").style.display = "none";
   document.getElementById("timep9").style.display="none";

   document.getElementById("p10").style.display = "block";
   //time for one question .
   let time9 = 0 ;
for(i = 0 ; i<1; i++){
   function timer(){
      let displaytime= time9+=i;
      document.getElementById("timep10").innerHTML ="You Have" +" " + displaytime +"sec";
      if(displaytime == 15){
       clearInterval( myTime)
       document.getElementById("buttonp10").style.display = "none";
       document.getElementById("timeoutp10").innerHTML = "Time Up !"
      }

   }
} 
let myTime= setInterval(timer , 1000)
}

function buttoneffectp10 (){ //button effect
  document.getElementById("wp101").style.backgroundColor = "red";
  document.getElementById("wp102").style.backgroundColor = "red"; 
  document.getElementById("wp103").style.backgroundColor = "red";
  document.getElementById("cp10").style.backgroundColor = "green";   
}
var scorep = 0 ;
for(i = 0 ; i<1; i++){
   function correctp(){
      var displayscore= scorep+=i;
      document.getElementById("scorep").innerHTML ="Score" + displayscore; 
}
}
var totaltimerp1 = 0;
for(i = 0 ; i<1; i++){
  function alltimerp1(){
     let displaytime= totaltimerp1+=i;
     document.getElementById("TTp").innerHTML ="You Have Get" +" " + displaytime +"sec";


     }
} 
var totalp1= setInterval(alltimerp1 , 1000)



//Result Page . 
function onsubmit3(){
  clearInterval(totalp1)
  document.getElementById("home").style.display = "none"; 
   document.getElementById("category").style.display = "none"; 
   document.getElementById("probability").style.display = "none";//make block pc case
   document.getElementById("p1").style.display = "none";
   document.getElementById("p2").style.display = "none";
   document.getElementById("p3").style.display = "none"; 
   document.getElementById("p4").style.display = "none"; 
   document.getElementById("p5").style.display = "none";
   document.getElementById("p6").style.display = "none";
   document.getElementById("p7").style.display = "none"; 
   document.getElementById("p8").style.display = "none";
   document.getElementById("p9").style.display = "none";
   document.getElementById("timep9").style.display="none";
  document.getElementById("resultp").style.display = "block";
  var U_name = document.getElementById("name").value;
  document.getElementById("fp_name").innerHTML = "Hello"+" "+U_name + " "+ "Your Result Is" ;
 document.getElementById("TTp").innerHtml = "total Time Taken"+ totaltimer1;
    
}















