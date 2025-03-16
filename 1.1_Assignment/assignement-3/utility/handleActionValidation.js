
export function addEventToDeleteQuestionBtn(deleteButton){

    function handleDeleteButton(e){
        let deleteBtn = e.currentTarget ; 
        let questionToDelete = deleteButton.closest(".question-management__question-item")
        let questionsContainer =  questionToDelete.closest(".question-management__questions-container") ; 

        let confirmDelete = confirm("Are you sure you want to delete question ") ; 
        if(confirmDelete){
           questionToDelete.remove();
        }  

    }


    deleteButton.addEventListener("click", function (e){ 
       e.preventDefault();
        handleDeleteButton(e);
        
    }) ;

}


export function addEventToRequiredQuestionBtn(deleteButton){

    function handleRequiredButton(e){
        let requiredBtn = e.currentTarget ; 
        let questionToMarkRequired = requiredBtn.closest(".question-management__question-item")
        let questionsContainer =  questionToMarkRequired.closest(".question-management__questions-container") ; 
        
        if(requiredBtn.classList.contains("question-not-required")){
            requiredBtn.classList.remove("question-not-required") ; 
            requiredBtn.classList.add("question-required") ; 

        }
        else if(requiredBtn.classList.contains("question-required")){
            requiredBtn.classList.remove("question-required") ; 
            requiredBtn.classList.add("question-not-required") ; 
        }

    }


    deleteButton.addEventListener("click", function (e){ 
       e.preventDefault();
        handleRequiredButton(e);
        
    }) ;

}

export function addEventToResponseValidation(validationButton){

    function handleNumber(validationContainer){
    // Create the main container div

// Create the first div (validation__question-type--select)
const questionTypeSelect = document.createElement('div');
questionTypeSelect.className = 'validation__question-type--select';

// Create the select element for question type
const selectQuestionType = document.createElement('select');
selectQuestionType.name = 'vali';
selectQuestionType.id = 'valie';

// Create the option elements for the select
const optionNumber = document.createElement('option');
optionNumber.value = 'numner';
optionNumber.textContent = 'number';


// Append the options to the select
selectQuestionType.appendChild(optionNumber);


// Append the select to the first div
questionTypeSelect.appendChild(selectQuestionType);

// Create the second div (validation__options)
const validationOptions = document.createElement('div');
validationOptions.className = 'validation__options';

// Create the first nested div (validation__options-1)
const validationOptions1 = document.createElement('div');
validationOptions1.className = 'validation__options-1 validation-option validation-option-number';

// Create the select element for the first nested div
const select1 = document.createElement('select');
select1.name = 'options-1';
select1.id = 'options-1';

// Create the option element for the first select
const option1 = document.createElement('option');
option1.value = 'min-number';
option1.textContent = 'Min Range Of Number';

// Append the option to the select
select1.appendChild(option1);

// Create the input element for the first nested div
const input1 = document.createElement('input');
input1.type = 'number';

// Append the select and input to the first nested div
validationOptions1.appendChild(select1);
validationOptions1.appendChild(input1);

// Create the second nested div (validation__options-2)
const validationOptions2 = document.createElement('div');
validationOptions2.className = 'validation__options-2 validation-option validation-option-number';

// Create the select element for the second nested div
const select2 = document.createElement('select');
select2.name = 'options-2';
select2.id = 'options-2';

// Create the option element for the second select
const option2 = document.createElement('option');
option2.value = 'max-number';
option2.textContent = 'Max Range Of Number';

// Append the option to the select
select2.appendChild(option2);

// Create the input element for the second nested div
const input2 = document.createElement('input');
input2.type = 'number';

// Append the select and input to the second nested div
validationOptions2.appendChild(select2);
validationOptions2.appendChild(input2);

// Append the nested divs to the second div
validationOptions.appendChild(validationOptions1);
validationOptions.appendChild(validationOptions2);

// Append the first and second divs to the main container
validationContainer.appendChild(questionTypeSelect);
validationContainer.appendChild(validationOptions);
     

    }
    function handleDate(validationContainer){
  // Assuming validationContainer is already defined


// Create the first div (validation__question-type--select)
const questionTypeSelect = document.createElement('div');
questionTypeSelect.className = 'validation__question-type--select';

// Create the select element for question type
const selectQuestionType = document.createElement('select');
selectQuestionType.name = 'vali';
selectQuestionType.id = 'valie';


const optionDate = document.createElement('option');
optionDate.value = 'date';
optionDate.textContent = 'Date';

// Append the options to the select
selectQuestionType.appendChild(optionDate);

// Append the select to the first div
questionTypeSelect.appendChild(selectQuestionType);

// Create the second div (validation__options)
const validationOptions = document.createElement('div');
validationOptions.className = 'validation__options';

// Create the first nested div (validation__options-1)
const validationOptions1 = document.createElement('div');
validationOptions1.className = 'validation__options-1 validation-option validation-option-date';

// Create the select element for the first nested div
const select1 = document.createElement('select');
select1.name = 'options-1';
select1.id = 'options-1';

// Create the option element for the first select
const option1 = document.createElement('option');
option1.value = 'min-date';
option1.textContent = 'Min Range of Date';

// Append the option to the select
select1.appendChild(option1);

// Create the input element for the first nested div
const input1 = document.createElement('input');
input1.type = 'date';

// Append the select and input to the first nested div
validationOptions1.appendChild(select1);
validationOptions1.appendChild(input1);

// Create the second nested div (validation__options-2)
const validationOptions2 = document.createElement('div');
validationOptions2.className = 'validation__options-2 validation-option validation-option-date';

// Create the select element for the second nested div
const select2 = document.createElement('select');
select2.name = 'options-2';
select2.id = 'options-2';

// Create the option element for the second select
const option2 = document.createElement('option');
option2.value = 'max-date';
option2.textContent = 'Max range of date';

// Append the option to the select
select2.appendChild(option2);

// Create the input element for the second nested div
const input2 = document.createElement('input');
input2.type = 'date';

// Append the select and input to the second nested div
validationOptions2.appendChild(select2);
validationOptions2.appendChild(input2);

// Append the nested divs to the second div
validationOptions.appendChild(validationOptions1);
validationOptions.appendChild(validationOptions2);

// Append the first and second divs to the validationContainer
validationContainer.appendChild(questionTypeSelect);
validationContainer.appendChild(validationOptions);
    }
    function handleText(validationContainer){
        // Assuming validationContainer is already defined

// Create the first div (validation__question-type--select)
const questionTypeSelect = document.createElement('div');
questionTypeSelect.className = 'validation__question-type--select';

// Create the select element for question type
const selectQuestionType = document.createElement('select');
selectQuestionType.name = 'vali';
selectQuestionType.id = 'valie';


const optionText = document.createElement('option');
optionText.value = 'text';
optionText.textContent = 'Text';


// Append the options to the select
selectQuestionType.appendChild(optionText);

// Append the select to the first div
questionTypeSelect.appendChild(selectQuestionType);

// Create the second div (validation__options)
const validationOptions = document.createElement('div');
validationOptions.className = 'validation__options';

// Create the first nested div (validation__options-1)
const validationOptions1 = document.createElement('div');
validationOptions1.className = 'validation__options-1 validation-option validation-option-text';

// Create the select element for the first nested div
const select1 = document.createElement('select');
select1.name = 'options-1';
select1.id = 'options-1';

// Create the option element for the first select
const option1 = document.createElement('option');
option1.value = 'min-text';
option1.textContent = 'Min Count Of Character';

// Append the option to the select
select1.appendChild(option1);

// Create the input element for the first nested div
const input1 = document.createElement('input');
input1.type = 'text';

// Append the select and input to the first nested div
validationOptions1.appendChild(select1);
validationOptions1.appendChild(input1);

// Create the second nested div (validation__options-2)
const validationOptions2 = document.createElement('div');
validationOptions2.className = 'validation__options-2 validation-option validation-option-text';

// Create the select element for the second nested div
const select2 = document.createElement('select');
select2.name = 'options-2';
select2.id = 'options-2';

// Create the option element for the second select
const option2 = document.createElement('option');
option2.value = 'max-text';
option2.textContent = 'Max Count Of Character';

// Append the option to the select
select2.appendChild(option2);

// Create the input element for the second nested div
const input2 = document.createElement('input');
input2.type = 'text';

// Append the select and input to the second nested div
validationOptions2.appendChild(select2);
validationOptions2.appendChild(input2);

// Append the nested divs to the second div
validationOptions.appendChild(validationOptions1);
validationOptions.appendChild(validationOptions2);

// Append the first and second divs to the validationContainer
validationContainer.appendChild(questionTypeSelect);
validationContainer.appendChild(validationOptions);
    }
   
    function handleValidation(e){
        console.log("hi");
       let validationBtn = e.currentTarget ; 
       let questionItem = validationBtn.closest(".question-management__question-item") ; 

       let questionType = questionItem.querySelector(".question-management__type-selector-container select").value ;  
       
       let validationContainer = questionItem.querySelector(".question-management__validation-display-container") ; 
       console.log(validationContainer);
       validationContainer.classList.remove("hide-validation");
       if(questionType=="number"){ 
        
         handleNumber(validationContainer);

       }
       else if(questionType=="date"){
        handleDate(validationContainer);
        
       }
       else if(questionType=="text"){
        handleText(validationContainer);
        
       }
    }

    validationButton.addEventListener("click" , function(e){
        e.preventDefault() ; 
        handleValidation(e) ; 
    })
   


}