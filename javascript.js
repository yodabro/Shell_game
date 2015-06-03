var ballArray = [$('.one', '.two' , '.three')];
var endGame = true;
$('#begin').on('click', function (a) {
	$('#ball').addClass('active');
	setTimeout (function(){
		$('#ball').addClass('fadeOut');
	},1000);
	endGame = false;
});


table = {  

 
 
 setEventListeners: function(){
   $('button').on('click',
     function(){
     	table.swapcards();
     }
   );
 },
 
 cardArray: [],
 createCards: function(){
   
   for (var j = 0; j<3; j++){
     table.cardArray[j] = new card();
     table.cardArray[j].setPosition(document.querySelectorAll('.card')[j]);
   }
   
 },
 
 cardPositions: ["one","two", "three"],
 
 
 swapcards: function(){
   var timerId=
   setInterval(function(){
     for(var i =0; i<3; i++){
       var rand=Math.floor(Math.random()*3);
       if(rand!=i){
         var temp = table.cardPositions[i];
         table.cardPositions[i]= table.cardPositions[rand];
         table.cardPositions[rand]= temp;
       }
       setTimeout (function (){
       	clearInterval(timerId)
       }, 6000);
     }



    for(var j = 0; j<3; j++){
table.cardArray[j].removeClass();
 table.cardArray[j].setClass(table.cardPositions[j]);  
}
     
   }, 1000)
 
 }
}

function card() {
 this.position= "",
 
 this.setPosition= function(x){
   this.position = x;
 },
 
 this.removeClass = function(){
   this.position.classList.remove("one","two","three");
 }
 this.setClass = function(x){
   this.position.classList.add(x);
 }
 
 //card containing a ball
 this.ball= false,
 
 this.addBall= function(){ 
 },
 this.removeBall=function(){
 }
}

table.setEventListeners();
table.createCards();