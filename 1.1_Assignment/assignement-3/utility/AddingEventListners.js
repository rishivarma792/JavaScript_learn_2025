import { addNewQuestion, createOptionGroup } from "./addNewQuestion.js";


export function addEventToAddQuestionButton(addQuestionButton, questionsContainer) {
    function handleAddQuestionButton(e) {
        addNewQuestion(questionsContainer);

    }

    addQuestionButton.addEventListener("click", function (e) {
        e.preventDefault();
        handleAddQuestionButton(e);
    })

}


export function addClickEventToEachQuestionItem(questionsContainer) {


//  FUNCTION TO REMOVE 
    function removeOtherUpdate(e, clickedQuestionItem) {

        function changeQuestionItemToView(e, questionItem) {
         
            if (questionItem.querySelector(".question-management__question input") != null) {
                let questionInput = questionItem.querySelector(".question-management__question input");
                let prevQuestionText = questionInput.value;
    
                // creating input element 
                let questionDiv = document.createElement("div");
                questionDiv.innerText = prevQuestionText;
                questionInput.replaceWith(questionDiv);
            }
        }
        function changeOptionItemToView(e, questionItem){
            let questionType = questionItem.querySelector(".question-management__type-selector-container select").value.toLowerCase() ;  
             if(questionType=="dropdown-singleselect" ||questionType=="dropdown-multiselect" ){
                //  disable the input 
                 let allInputs =questionItem.querySelectorAll(".dropdown-option-group input")
                 for(let input of allInputs){
                    if(input.value==""){
                        let optionGroup = input.closest(".dropdown-option-group");
                        optionGroup.classList.add("hidden") ;  
                    }
                    else if(input.classList.contains("option-abled")){
                        input.classList.remove("option-abled");
                        input.classList.add("option-disabled");
                        input.disabled = true ; 
                    }
                 }
             }  
            //  else{
            //     // for text number date doumcennt 
    
            //  }
        }
        function changeValidationDisplayContainerToView(e,questionItem){
            let validationDispalyContainer = questionItem.querySelector(".question-management__validation-display-container");
            validationDispalyContainer.classList.add("hidden") ; 
        }

        let questionContainer = e.currentTarget;
        let allQuestionItems = questionContainer.querySelectorAll(".question-management__question-item");

        for (let questionItem of allQuestionItems) {
            if (questionItem != clickedQuestionItem) {

                // we need to handle here how the diff que types convert to view diplay 
                changeQuestionItemToView(e, questionItem);
                changeOptionItemToView(e,questionItem);
                changeValidationDisplayContainerToView(e,questionItem) ; 
                let elementsWithHidden = questionItem.querySelectorAll(".show");
                for (let element of elementsWithHidden) {
                    if (element.classList.contains("show")) {
                        element.classList.remove("show");
                        element.classList.add("hidden");
                    }
                }
            }
        }
    }

 
// FUNCTION TO ADD 
    function addUpdateToClikedItem(e,questionItem){

        function changeQuestionItemToUpdate(e, questionItem) {
            // it is to change the question 
    
            if (questionItem.querySelector(".question-management__question div") != null) {
    
                let questionDiv = questionItem.querySelector(".question-management__question div");
                let prevQuestionText = questionDiv.innerText;
    
                // creating input element 
                let questionInput = document.createElement("input");
                questionInput.type = "text";
                questionInput.value = prevQuestionText;
                questionDiv.replaceWith(questionInput);
            }
    
        }
        function  changeOptionToUpdate(e,questionItem) {
               
            let questionType = questionItem.querySelector(".question-management__type-selector-container select").value.toLowerCase() ;  
          
             if(questionType=="dropdown-singleselect" ||questionType=="dropdown-multiselect" ){
               let allInputs = questionItem.querySelectorAll(".question-management__question-input--dropdown input") ; 
               let length = allInputs.length; 
               for(let inputElement of allInputs){
                  
                  if(inputElement.classList.contains("option-disabled")){
                    inputElement.disabled = false ; 
                    inputElement.classList.remove("option-disabled") ; 
                    inputElement.classList.add("option-abled") ; 

                  }
                
                } 
            //   to show hdden option 
             let optionContainer = questionItem.querySelector(".question-management__question-input--dropdown") ; 
             let allOption = optionContainer.querySelectorAll(".dropdown-option-group") ;  
             for(let option of allOption ){
                if(option.classList.contains("hidden")){
                    option.classList.remove("hidden");
                }
             }
            
                
             }  
        } 
        function changeValidationDisplayContainerToUpdate(e,questionItem){
            let validationDispalyContainer = questionItem.querySelector(".question-management__validation-display-container");
            validationDispalyContainer.classList.remove("hidden") ; 
        }
        changeQuestionItemToUpdate(e, questionItem);
        changeOptionToUpdate(e,questionItem) ;         
        changeValidationDisplayContainerToUpdate(e,questionItem) ;
    }



    function handleUpdateQuestion(e) {

        // check if the e.target has parent question-management__question-item
        if (e.target.closest(".question-management__question-item") != null) {


            let questionItem = e.target.closest(".question-management__question-item");
            // TO REMOVE OTHER UPDATE STATUS 
            removeOtherUpdate(e, questionItem);
            addUpdateToClikedItem(e,questionItem);
            


            let elementsWithHidden = questionItem.querySelectorAll(".hidden");
            for (let element of elementsWithHidden) {
                if (element.classList.contains("hidden")) {
                    element.classList.remove("hidden");
                    element.classList.add("show");
                }
            }
        }


    }


    questionsContainer.addEventListener("click", function (e) {
        handleUpdateQuestion(e);

    })


}


export function addInputToDropdownOption(inputElement) {

    function handleFocus(e) {
        // e.preventDefault();
        let optionContainer = e.target.closest(".question-management__question-input--dropdown");
        let optionNumber = optionContainer.children.length + 1 ; 
       let optionGroup = createOptionGroup("option-abled",optionNumber);

        optionContainer.appendChild(optionGroup);
        e.target.removeEventListener("focus",handleFocus);
    }

    inputElement.addEventListener("focus", handleFocus);

}

export function addEventToDeleteOptionBtn(deleteBtn){ 



function handleDeleteButton(e){

    let optionsDiv = deleteBtn.closest(".question-management__question-input--dropdown ");
    let allOptions = optionsDiv.querySelectorAll(".dropdown-option-group"); 
    let option  = deleteBtn.closest(".dropdown-option-group");

    let allOptionArray =  Array.from(allOptions);
    let optionNumber = allOptionArray.indexOf(option) ; 
    
    if(option != allOptions[allOptions.length-1])
    {   
        let i =1 ; 
        for(let eachOption of allOptions){
            if(eachOption!=option){
                let label = eachOption.querySelector("label"); 
                label.innerText = i.toString() + "." ; 
                i++ ;  
            }
            else if (eachOption==option){
                eachOption.remove() ; 
            }
        }
    }
}

deleteBtn.addEventListener("click", handleDeleteButton) ; 
   
}