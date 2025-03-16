import { addInputToDropdownOption } from "./AddingEventListners.js";
import { createOptionGroup } from "./addNewQuestion.js";

export function handleChangesForQuestionTypes(selectElement) {

    function handleText(e, questionItem) {

        let optionsContainer = questionItem.querySelector(".question-management__question-options-container");
        optionsContainer.innerHTML = "";

        const divElement = document.createElement('div');
        divElement.className = 'question-management__question-input--text';

        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.placeholder = 'answer text';
        inputElement.disabled = true;

        divElement.appendChild(inputElement);

        optionsContainer.appendChild(divElement);

    }
    function handleNumber(e, questionItem) {
        let optionsContainer = questionItem.querySelector(".question-management__question-options-container");
        optionsContainer.innerHTML = "";
        const divElement = document.createElement('div');
        divElement.className = 'question-management__question-input--number';

        const inputElement = document.createElement('input');
        inputElement.type = 'number';
        inputElement.placeholder = 'answer number';
        inputElement.disabled = true;

        divElement.appendChild(inputElement);

        optionsContainer.appendChild(divElement);
    }
    function handleDate(e, questionItem) {
        let optionsContainer = questionItem.querySelector(".question-management__question-options-container");
        optionsContainer.innerHTML = "";
        const divElement = document.createElement('div');
        divElement.className = 'question-management__question-input--date';

        const inputElement = document.createElement('input');
        inputElement.type = 'date';
        inputElement.disabled = true;

        divElement.appendChild(inputElement);

        optionsContainer.appendChild(divElement);

    }
    function handleDocument(e, questionItem) {
        let optionsContainer = questionItem.querySelector(".question-management__question-options-container");
        optionsContainer.innerHTML = "";
        const divElement = document.createElement('div');
        divElement.className = 'question-management__question-input--document';

        const inputElement = document.createElement('input');
        inputElement.type = 'file';
        inputElement.disabled = true;

        divElement.appendChild(inputElement);

        optionsContainer.appendChild(divElement);
    }
    function handleDropdownSingle(e, questionItem) {
        
        let optionsContainer = questionItem.querySelector(".question-management__question-options-container");
        optionsContainer.innerHTML = "";
        const outerDivElement = document.createElement('div');
        outerDivElement.className = 'question-management__question-input--dropdown-single-select';
        outerDivElement.classList.add('question-management__question-input--dropdown');
        let optionGroup = createOptionGroup("option-abled" , 1 , "option" );
        outerDivElement.append(optionGroup) ; 
        optionsContainer.appendChild(outerDivElement);

    }
    function handleDropdownMultiple(e, questionItem) {

    }



    function hanldeOptionChange(e) {

        let questionItem = e.target.closest(".question-management__question-item");
        let questionType = e.currentTarget.value.toLowerCase();

        let validationDispalyContainer = questionItem.querySelector(".question-management__validation-display-container");
         validationDispalyContainer.innerHTML="";
        if (questionType == "text") {
            handleText(e, questionItem);
        }
        else if (questionType == "number") {
            handleNumber(e, questionItem);
        }
        else if (questionType == "date") {
            handleDate(e, questionItem);
        }
        else if (questionType == "document") {
            handleDocument(e, questionItem);

        }
        else if (questionType == "dropdown-singleselect") {
            handleDropdownSingle(e, questionItem);
        }
        else if (questionType == "dropdown-multiselect") {
            handleDropdownSingle(e, questionItem);
        
        }

    }

    selectElement.addEventListener("change", function (e) {

        hanldeOptionChange(e);
    })

} 