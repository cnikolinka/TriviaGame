var answers = ["Irish wolfhound", "zero", "42", "Labrador retrievers", "paws", "Hearing", "Greyhound",],
data = $("input"),
WrongAnswers = 0,
RightAnswers = 0,
NoAnswer = 0,
counter = 90;


function startGame(){
$(".data").css("display", "none");
   for(var i = 0; i < data.length; i++){
	   if(data[i].checked){

		   // Checking if user choice equal correct answer
		   if(answers.indexOf(data[i].value) !== -1){
			   RightAnswers++;
		   }

		   else{
			   WrongAnswers++;
		   }
		   
	   }
   }

   var result = RightAnswers + WrongAnswers;

   // Checking if there is any empty
   if(result !== 7){
	   NoAnswer = 7 - result;
   }

   
   $(".correct").html("You have: " + RightAnswers + " correct answers");
   $(".inCorrect").html("You have: " + WrongAnswers + " inCorrect answers");
   $(".empty").html( "You have: " + NoAnswer + " empty answers");
}




$(".start").on("click", function(){

$(".start").toggleClass("hide");
$("#start-page").toggleClass("hide");
$(".data, .done").css("display", "block");

$(".done").on("click", function(){
	   startGame();

	   clearInterval(startCounter);

   }); 


// Start counter
var startCounter = setInterval(function(){

   
   counter--;
   
   (counter <= 9) ? $(".counter").html("You have " + "0" + counter + " seconds " + " remaining...") : $(".counter").html("You have "  + counter + " seconds" + " remaining...")
   

   if(counter <= 0){
	   startGame();
	   clearInterval(startCounter);
   }

   console.log(counter);
}, 1000);






}); 

