

import {addNewQuestion}  from "./utility/addNewQuestion.js";
import { addClickEventToEachQuestionItem, addEventToAddQuestionButton } from "./utility/AddingEventListners.js";


let questionsContainer = document.querySelector(".question-management__questions-container") ; 
let addNewQuestionButton = document.querySelector(".question-management__question-action--add") ; 


document.addEventListener("DOMContentLoaded" , function(e){
    addNewQuestion(questionsContainer);   
    
}) ; 


addEventToAddQuestionButton(addNewQuestionButton,questionsContainer) ; 
addClickEventToEachQuestionItem(questionsContainer) ; 



 
