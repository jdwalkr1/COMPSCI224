document.addEventListener('DOMContentLoaded', function() {
// Function to collect the survey data
function collectSurveyData() {
    // Get the selected values from the dropdown menus
     const negativeth = document.getElementById['negativeth'];
     const identify = document.getElementById['identify'];
     const overall = document.getElementById['overall'];
     const upset = document.getElementById['upset'];
     const mindfulness = document.getElementById['mindfulness'];
     const positive = document.getElementById['positive'];
     const aware = document.getElementById['aware'];
     const awake = document.getElementById['awake'];
     const criticize = document.getElementById['criticize'];
     const therapy = document.getElementById['therapy'];

     const surveyArray = [negativeth, identify, overall, upset, mindfulness, positive, aware, awake, criticize, therapy];
        
     let responses = 0;
     responses.type = 'int';

     let total = surveyArray.length;

     let calculation = overall;

     

     // Function to find total value of all the answers based on numerical value
     function tally(scores){
         responses += scores;
     }
       
     calculation = (responses/total) * 100;

     if(calculation > 0){
          console.log("Based on your responses, you received a score of: " + calculation + "%.");
     } else {
         console.log("According to your answers, you seem to be doing great! Feel free to browse our resources anyways though!");
    }
        
     if(calculation == 100){
          console.log("Based on your answers, it is highly recommended that you seek care from a professional and research symptoms of depression. If you are having an emergency or crisis please call 911.");
     }

     if(calculation > 0 && calculation < 25){
         console.log("Your answers suggest that you are doing okay but you might benefit from one or more of our resources.");
     }

     if(calculation >= 25 && calculation < 50){
         console.log("You seem to be experiencing a few of the common symptoms of depression. Our resources may be able to help inform you about it while teaching healthy coping mechanisms.");
     }

     if(calculation >= 50 && calculation < 75){
         console.log("You seem to be experiencing a number of the common symptoms of depression. Our resources may be able to help guide you towards a better understanding of what that means for you.");
     }

     if(calculation >= 75 && calculation < 100){
         console.log("You seem to be experiening a significant amount of mental distress. It is recommended that you read some of our resources on depression and consider consulting a professional for advice.")
     }
     

}

// Add an event listener to the Submit button to collect data when clicked
const Submit = document.querySelector("button");
Submit.addEventListener("click", collectSurveyData);
});
