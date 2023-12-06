document.addEventListener('DOMContentLoaded', function() {
    // Function to collect the survey data
    var chart = anychart.pie();
    function collectSurveyData() {
        // Get the selected values from the dropdown menus
         const negativeth = document.getElementById('negativeth').value;
         const identify = document.getElementById('identify').value;
         const overall = document.getElementById('overall').value;
         const upset = document.getElementById('upset').value;
         const mindfulness = document.getElementById('mindfulness').value;
         const positive = document.getElementById('positive').value;
         const aware = document.getElementById('aware').value;
         const awake = document.getElementById('awake').value;
         const criticize = document.getElementById('criticize').value;
         const therapy = document.getElementById('therapy').value;
         const  identifyemotions = document.getElementById('identifyemotions').value;
         const  specificemotions = document.getElementById('specificemotions').value;
         const dailylife = document.getElementById('dailylife').value;
         const activities = document.getElementById('activities').value;
         const satisfaction = document.getElementById('satisfaction').value;
         const support = document.getElementById('support').value;
         const unresolved = document.getElementById('unresolved').value;
         const stressburnout = document.getElementById('stressburnout').value;
         const workingout = document.getElementById('workingout').value;
         const sleep = document.getElementById('sleep').value;
         const goals = document.getElementById('goals').value;
         const coping = document.getElementById('coping').value;
         const social = document.getElementById('social').value;
         const proactive = document.getElementById('proactive').value;
         const effective = document.getElementById('effective').value;
    
         
         const surveyArray = [negativeth, identify, overall, upset, mindfulness, positive, aware, awake, criticize, therapy, identifyemotions, specificemotions, dailylife, activities, satisfaction, support, unresolved, stressburnout, workingout, sleep, goals, coping, social, proactive, effective];
            
         var responses = 0;
         responses.type = 'int';
    
         let total = (surveyArray.length*4);
    
         let calculation = 0;
    
         
    
         // Function to find total value of all the answers based on numerical value
         for (let i = 0; i < surveyArray.length; i += 1) {
      
              responses += Number(surveyArray[i]);
      
          }
    

         calculation = parseFloat((responses/total) * 100);

         console.log(responses + "/" + total + " * 100 = " + calculation);
    
         if(calculation > 25){
              document.getElementById('freeform').value = ("Based on your responses, you received a score of: " + calculation + "%.");
         } else {
             document.getElementById('freeform').value = document.getElementById('freeform').value + ("\nAccording to your answers, you seem to be doing great! Feel free to browse our resources anyways though!");
        }
            
         if(calculation == 100){
              document.getElementById('freeform').value = document.getElementById('freeform').value + ("\nBased on your answers, it is highly recommended that you seek care from a professional and research symptoms of depression. If you are having an emergency or crisis please call 911.");
         }
    
         if(calculation > 25 && calculation < 50){
             document.getElementById('freeform').value = document.getElementById('freeform').value + ("\nYour answers suggest that you are doing okay but you might benefit from one or more of our resources.");
         }
    
         if(calculation >= 50 && calculation < 75 && calculation != 1){
             document.getElementById('freeform').value = document.getElementById('freeform').value + ("\nYou seem to be experiencing a few of the common symptoms of depression. Our resources may be able to help inform you about it while teaching healthy coping mechanisms.");
         }
    
         if(calculation >= 75 && calculation < 100){
            document.getElementById('freeform').value = document.getElementById('freeform').value + ("\nYou seem to be experiencing a number of the common symptoms of depression. Our resources may be able to help guide you towards a better understanding of what that means for you.");
         }
    
         if(calculation >= 75){
             document.getElementById('freeform').value = document.getElementById('freeform').value + ("\nYou seem to be experiening a significant amount of mental distress. It is recommended that you read some of our resources on depression and consider consulting a professional for advice.")
         }
         
         var data = [
            {x: "Coping Skills", value: (Number(overall) + Number(mindfulness) + Number(therapy) + Number(activities) + Number(support) + Number(workingout) + Number(goals) + Number(social) + Number(proactive) + Number(effective))},
            {x: "Depression", value: (Number(positive) + Number(awake) + Number(criticize))},
            {x: "Anxiety", value: (Number(negativeth) + Number(stressburnout) + Number(sleep))},
            {x: "Emotional Dysregulation", value: (Number(upset), Number(identifyemotions) + Number(specificemotions) + Number(dailylife) + Number(satisfaction))},
            {x: "Self-awareness", value: (Number(identify) + Number(aware) + Number(unresolved) + Number(goals))}
         ];
         // Code to create pie chart
         chart.title("Severity of Your Answers");
         chart.data(data);
         chart.radius(100)
         chart.legend().position("right");
         chart.legend().itemsLayout("vertical");  
         chart.container('container');
         chart.draw();

    }
    
function resetData(){
    var data = [];
    document.getElementById('freeform').value = "";
    chart.data(data);
    chart.title("");
}

    // Add an event listener to the Submit button to collect data when clicked
    const Submit = document.getElementById("submit");
    Submit.addEventListener("click", collectSurveyData);
    const Reset = document.getElementById("reset");
    Reset.addEventListener("click", resetData);
    });
