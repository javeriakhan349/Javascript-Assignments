 var quiz = [
   {
     ques : "Q1. Which method is used to select an HTML element by its ID?" ,
    opt1 : "getElementsByTagName()" ,
    opt2 : "querySelectorAll()" ,
    opt3: "getElementById()",
    opt4 : "getElementsByClassName()",
    ans : "getElementById()"

   },
   {
     ques : "Q2. What does document.querySelector() return if multiple elements match?" ,
    opt1 : "All matching elements" ,
    opt2 : "An array of elements" ,
    opt3: "The first matching element",
    opt4 : "The last matching element",
    ans : "The first matching element"

   },
   {
     ques : "Q3. Which property changes the text content of an HTML element?" ,
    opt1 : "innerHTML" ,
    opt2 : "textContent" ,
    opt3: "style",
    opt4 : "className",
    ans : "textContent"

   },
   {
     ques : "Q4. Which method creates a new HTML element?" ,
    opt1 : "appendChild()" ,
    opt2 : "querySelector()" ,
    opt3: "createElement()",
    opt4 : "removeChild()",
    ans : "createElement()"

   },
   {
     ques : "Q5. Which method attaches an event handler to an HTML element?" ,
    opt1 : "addEventListener()" ,
    opt2 : "querySelector()" ,
    opt3: "setAttribute()",
    opt4 : "removeChild()",
    ans : "addEventListener()"

   },
 {
    ques: "Q6. What is the output of the following code? let x = document.getElementById('demo'); x.style.color = 'red';",
    opt1: "Changes the background to red",
    opt2: "Changes the text color to red",
    opt3: "Changes the font size to red",
    opt4: "Removes the element",
    ans: "Changes the text color to red"
},
{
    ques: "Q7. Which method removes a child element from its parent?",
    opt1: "removeAttribute()",
    opt2: "deleteElement()",
    opt3: "removeChild()",
    opt4: "clearElement()",
    ans: "removeChild()"
},
{
    ques: "Q8. Which event occurs when a user clicks an HTML element?",
    opt1: "mouseover",
    opt2: "keydown",
    opt3: "change",
    opt4: "click",
    ans: "click"
},
{
    ques: "Q9. What does the appendChild() method do?",
    opt1: "Adds a node as the last child",
    opt2: "Adds a node as the first child",
    opt3: "Deletes a node",
    opt4: "Changes an element's ID",
    ans: "Adds a node as the last child"
},
{
    ques: "Q10. Which property provides access to the parent element of a DOM node?",
    opt1: "firstChild",
    opt2: "parentElement",
    opt3: "nextSibling",
    opt4: "lastChild",
    ans: "parentElement"
}]
index = 0 ;
score = 0 ; 
function renderQuiz(){
 var quizContainer = document.getElementById("quizContainer")
 var option = document.getElementsByName("option")
 for( i=0 ; i<option.length ; i++){
    if( option[i].checked){
        if( option[i].value === quiz[index-1].ans)
            score++
    }
 }
 if(!quiz[index])
 {
    var per = (score/quiz.length)*100 ;
  
    quizContainer.innerHTML = ` 
        <h1 class=" my-4 text-center textColor">Quiz Completed</h1>
    <h1 class= " smallHeading my-1  fst-italic"> Your score is ${score}/${quiz.length} </h1>
    <h3  class=" smallHeading my-2 font-roboto">Percentage : ${per}%</h3>
    <p class=" my-4 lead text-center color font-roboto">Great work and keep improving!</p>
    `
     document.getElementById("quizContainer").style.backgroundColor = "#F3EAFB";
   document.getElementsByClassName("smallHeading").style.color = "#521D83";
 }
 quizContainer.innerHTML = `
             <p class="fw-bold">${quiz[index].ques}</p>
            <label class="my-2 border-primary-subtle border-bottom "><input type="radio" name="option" value="${quiz[index].opt1}" class="me-3"> ${quiz[index].opt1}</label>

            <label class="my-2 border-primary-subtle border-bottom "><input type="radio" name="option" value="${quiz[index].opt2}" class="me-3"> ${quiz[index].opt2}</label>

            <label class="my-2 border-primary-subtle border-bottom "><input type="radio" name="option" value="${quiz[index].opt3}" class="me-3"> ${quiz[index].opt3}</label>

            <label class="my-2 border-primary-subtle border-bottom "><input type="radio" name="option" value="${quiz[index].opt4}" class="me-3">${quiz[index].opt4}</label>

            <button  id="next-btn" class="btn  btn-success mx-auto w-25 my-2 " onclick = "renderQuiz()">NEXT</button>`

            if(index === quiz.length-1){
                nextBtn = document.getElementById("next-btn")
                nextBtn.innerHTML = "Submit"
                nextBtn.classList.add("btn-danger")
            }
 index++         
}
renderQuiz()

