import { addEventToDeleteOptionBtn, addInputToDropdownOption } from "./AddingEventListners.js";
import { addEventToDeleteQuestionBtn, addEventToRequiredQuestionBtn, addEventToResponseValidation } from "./handleActionValidation.js";
import { handleChangesForQuestionTypes } from "./handleQuestionTypes.js";

export function addNewQuestion(questionsContainer){
   
    const questionItem = document.createElement('div');
    questionItem.className = 'question-management__question-item';

    // Create the drag handler
    const dragHandler = document.createElement('div');
    dragHandler.className = 'question-management__question-drag-handler';
    dragHandler.textContent = 'drag';
    questionItem.appendChild(dragHandler);

    // Create the ques  tion type selector container
    const typeSelectorContainer = document.createElement('div');
    typeSelectorContainer.className = 'question-management__question-type-selector-container';

    // Create the question container
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question-management__question';
    const questionText = document.createElement('div');
    questionText.textContent = 'Question';
    questionContainer.appendChild(questionText);
    typeSelectorContainer.appendChild(questionContainer);

    // Create the type selector container
    const typeSelectorContainerHidden = document.createElement('div');
    typeSelectorContainerHidden.className = 'question-management__type-selector-container hidden';
    const select = document.createElement('select');
    select.name = 'type-selector';
    select.id = 'type-selector';
    handleChangesForQuestionTypes(select);

    // Create options for the select element
    const options = [{
        value : "text",
        innerText : "text"
    }, {
        value : "date",
        innerText : "date"
    }, {
        value : "number",
        innerText : "number"
    }, {
        value : "document",
        innerText : "document"
    }, {
        value : "dropDown-singleselect",
        innerText : "Dropdown-single select"
    },{
        value : "dropDown-multiselect",
        innerText : "Dropdown-multi select"
    }];
    options.forEach(optionValue => {
        const option = document.createElement('option');
        option.value = optionValue.value;
        option.textContent = optionValue.innerText;
        select.appendChild(option);
    });

    typeSelectorContainerHidden.appendChild(select);
    typeSelectorContainer.appendChild(typeSelectorContainerHidden);
    questionItem.appendChild(typeSelectorContainer);

    // Create the question options container
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'question-management__question-options-container';
    const questionInputText = document.createElement('div');
    questionInputText.className = 'question-management__question-input--text';
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'answer text';
    input.disabled = true;
    questionInputText.appendChild(input);
    optionsContainer.appendChild(questionInputText);
    questionItem.appendChild(optionsContainer);

    const validationDisplayContainer = document.createElement("div") ;
    validationDisplayContainer.classList.add("question-management__validation-display-container") ; 
    validationDisplayContainer.classList.add("hide-validation") ;
    questionItem.appendChild(validationDisplayContainer);

    // Create the actions and validations container
    const actionsContainerHidden = document.createElement('div');
    actionsContainerHidden.className = 'question-management__question-actions-validations-container hidden';
    const hr = document.createElement('hr');
   questionItem.appendChild(hr);

    // Create buttons
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn question-management__question-action--delete';
    deleteButton.textContent = 'Delete';
    addEventToDeleteQuestionBtn(deleteButton) ; 
    actionsContainerHidden.appendChild(deleteButton);

    const requiredButton = document.createElement('button');
    requiredButton.className = 'btn question-management__question-validation--required';
    requiredButton.textContent = 'Required';
    requiredButton.classList.add("question-not-required") ; 
    addEventToRequiredQuestionBtn(requiredButton);
    actionsContainerHidden.appendChild(requiredButton);

    const responseValidationButton = document.createElement('button');
    responseValidationButton.className = 'btn question-management__question-validation--response-validation';
    responseValidationButton.textContent = 'Response validation';
    addEventToResponseValidation(responseValidationButton);
    actionsContainerHidden.appendChild(responseValidationButton);

    questionItem.appendChild(actionsContainerHidden);

    // Append the question item to the container
   questionsContainer.append(questionItem);
    


}


export function createOptionGroup(classToAdd="option-abled",labelNumber=1,value="",placeholder="enter option"){
// Create the main div
const dropdownOptionGroup = document.createElement('div');
dropdownOptionGroup.className = 'dropdown-option-group';

// Create the label
const label = document.createElement('label');
label.setAttribute('for', 'option');
label.textContent = labelNumber.toString() + ".";

// Create the input
const input = document.createElement('input');
input.type = 'text';
input.id = 'option';
input.classList.add(classToAdd);
input.value = value ; 
input.placeholder= placeholder ; 
addInputToDropdownOption(input);

// Create the action button div
const actionBtnDiv = document.createElement('div');
actionBtnDiv.className = 'dropdown-option__action-btn-delete dropdown-option__action-btn';

// Create the button

// Create the icon
const icon = document.createElement('i');
icon.className = 'fa-solid fa-xmark';
addEventToDeleteOptionBtn(icon);

// Append the icon to the button

// Append the button to the action button div
actionBtnDiv.appendChild(icon);

// Append the label, input, and action button div to the main div
dropdownOptionGroup.appendChild(label);
dropdownOptionGroup.appendChild(input);
dropdownOptionGroup.appendChild(actionBtnDiv);

// Return the main div reference
return dropdownOptionGroup;
}