  var str1 = '<input type="radio" class="form-check-input" name="optradio" id="a" onchange="checka()">';
      var str2 = '<input type="radio" class="form-check-input" name="optradio" id="b" onchange="checkb()">';
      var str3 = '<input type="radio" class="form-check-input" name="optradio" id="c" onchange="checkc()">';
      var str4 = '<input type="radio" class="form-check-input" name="optradio" id="d" onchange="checkd()">';
      var answer = "";
     var quizQuestions = { ques8:"What is the name of this Quiz's developer ?" ,
                           q8op1 : "Rajat Sharma",
                           q8op2 : "Rajesh Jain",
                           q8op3 : "Ramesh Singh",
                           q8op4 : "None of these",

                           ques5 : "Who is the instructor in Udemy's Complete Web Developer Course 2.0' ?" ,
                           q5op1 : "Tim Buchalka",
                           q5op2 : "Adam Eubanks",
                           q5op3 : "Rob Perceival",
                           q5op4 : "Maximillan",

                           ques3 : "Which of the following is not an object oriented language ?" ,
                           q3op1 : "C++",
                           q3op2 : "Objective C",
                           q3op3 : "C",
                           q3op4 : "Java", 

                           ques4 : "Who invented Javascript ?" ,
                           q4op1 : "James Gosling",
                           q4op2 : "Guido Van Rossum",
                           q4op3 : "Dennis Ritchie",
                           q4op4 : "Brendan Eich", 

                           ques2 : "HTML stands for : " ,
                           q2op1 : "Hyper Text Meta Language",
                           q2op2 : "Hyper Link Text Markup",
                           q2op3 : "Hyper Text Markup Language",
                           q2op4 : "None of these", 

                           ques6 : "CSS stands for : " ,
                           q6op1 : "Coercing Style Sheets",
                           q6op2 : "Cascading Style Sheets",
                           q6op3 : "Calling Style Sheets",
                           q6op4 : "None of these", 

                           ques7 : "Satya Nadella is the CEO of which software giant?" ,
                           q7op1 : "MasterCard",
                           q7op2 : "Amazon",
                           q7op3 : "Google",
                           q7op4 : "Microsoft",

                           ques1 : "What are the technologies used in making this Quiz App ?" ,
                           q1op1 : "HTML , CSS , Javascript , Semantic UI",
                           q1op2 : "HTML , CSS , Java , Semantic UI",
                           q1op3 : "HTML , CSS , Javascript , BootStrap",
                           q1op4 : "HTML , CSS , Python , Semantic UI"  };

                           document.getElementById("start").onclick = function(){

                            

                            document.getElementById("quizContainer").innerHTML = '<h4 id="question">'+quizQuestions.ques1+'</h3>'+
      '<div class="form-check">'+
  '<label class="form-check-label" id="op1">'+
    str1+quizQuestions.q1op1+
  '</label>'+ 
'</div>'+ 

'<div class="form-check">'+ 
  '<label class="form-check-label" id="op2">'+ 
    str2+quizQuestions.q1op2+
  '</label>'+ 
'</div>'+ 

'<div class="form-check">'+ 
 ' <label class="form-check-label" id="op3">'+ 
  str3+ quizQuestions.q1op3+
  '</label>'+ 
'</div>'+ 

'<div class="form-check">'+
 ' <label class="form-check-label" id="op4">'+ 
    str4+ quizQuestions.q1op4+
  '</label>'+ 
'</div>'+
'<button type="button" class="btn btn-success" id="next" onclick="next()"> Next </button>';


  
}

var co=1;
function next(){

if(document.getElementById("a").checked){
answer = answer + "a" ;
}else if(document.getElementById("b").checked){
answer = answer + "b" ;
}else if(document.getElementById("c").checked){
answer = answer + "c" ;
}else if(document.getElementById("d").checked){
answer = answer + "d" ;
}else{
answer = answer + "e" ;
}

  co = co + 1;
if(co<9){
for(var i in quizQuestions){
  if(i == "ques"+co){
document.getElementById("question").innerHTML = quizQuestions[i];
  }
  if(i == "q"+co+"op1"){
    document.getElementById("op1").innerHTML = str1 + quizQuestions[i];
  }
  if(i == "q"+co+"op2"){
     document.getElementById("op2").innerHTML = str2 + quizQuestions[i];
  }
  if(i == "q"+co+"op3"){
    document.getElementById("op3").innerHTML = str3 + quizQuestions[i];
  }
  if(i == "q"+co+"op4"){
    document.getElementById("op4").innerHTML = str4 + quizQuestions[i];
  }
}
}else{

  document.getElementById("quizContainer").innerHTML = '<button type="button" class="btn btn-primary" id="result" onclick="result()">See Results!</button>';
  
}


};


function checka(){
  document.getElementById("a").setAttribute("checked","checked") ;
  remove(document.getElementById("b"));
  remove(document.getElementById("c"));
  remove(document.getElementById("d"));
}
function checkb(){
  document.getElementById("b").setAttribute("checked","checked") ;
  remove(document.getElementById("a"));
  remove(document.getElementById("c"));
  remove(document.getElementById("d"));
}
function checkc(){
  document.getElementById("c").setAttribute("checked","checked") ;
  remove(document.getElementById("b"));
  remove(document.getElementById("d"));
  remove(document.getElementById("a"));
}
function checkd(){
  document.getElementById("d").setAttribute("checked","checked") ;
  remove(document.getElementById("b"));
  remove(document.getElementById("c"));
  remove(document.getElementById("a"));
}

function remove(inp){
inp.removeAttribute("checked");
}

function result(){
$.ajax({
       
         type : "POST",
         url : "ResultCheck.php",
         data : {answer : answer}
       
       
       }).done(function(data){
        var clause = "";
  		if(data<3){
        clause = "<br><h4>There is a scope of improvement.<h4>";
        }
        else if(data <= 4 && data>=3){
        clause = "<br><h4>It is pretty fair!<h4>";
        }else if(data>4 && data<=6){
        clause = "<br><h4>It is good!<h4>";
        }else{
        clause = "<br><h4>It is exceptional!</h4>"
        }
         document.getElementById("quizContainer").innerHTML = "<br><br><br><h4>Your Score is "+data+" / 8</h4>"+clause;
         
       })
}