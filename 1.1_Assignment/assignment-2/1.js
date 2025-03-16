function handleNewEntryBtn(NewEntryButton) {
    NewEntryButton.addEventListener("click", function () {
        let userEntryDiv = document.createElement("div");
        userEntryDiv.classList.add("user-entry");
        userEntryDiv.innerHTML = `
        <div class="type user-type">
        <i class="fa-solid fa-briefcase"></i>
        </div>
        <div class="activity">
        
        <select name="activity" id="activity" class=" user-activity ">
        <option value="training" >training</option>
        <option value="Break">Break</option>
        <option value="hr activities">hr activities</option>
        <option value="coe">coe</option>
        <option value="miscelleneous">miscelleneous</option>
        </select>
        </div>
        <div class="task">
        
        <select name="task" id="task" class="user-task ">
                                <option value="session" >session</option>
                                <option value="Doubt clarification">Doubt clarification</option>
                                <option value="discussion">1:1 discussion</option>
                                <option value="training preparation">Training preparation</option>
                                <option value="self learning">self learning</option>
                                </select>
                                
                                </div>
                                
                                <div class="task-details">
                                <textarea type="text" class="task-details-text entry " placeholder="enter details here "></textarea>
                                
                                <div class="task-details-word-count">
                                <div>
                                <span class="count">0</sapn>/ <span>255</span>
                                </div>
                                <div class="error-message">
                                this is required 
                                </div>
                                </div>
                                </div>
                                       <div class="start-time">
                                    <input class="start-time-display entry" placeholder="Start time">
                                    <div class="error-message">
                                        this is required
                                    </div>
                                    <div class="start-time-dropdown time-dropdown">

                                        <div class="start-time-hours ">
                                            <i class="fa-solid fa-chevron-up arrow arrow-up"></i>
                                            <div class="hours">9</div>
                                            <i class="fa-solid fa-chevron-down arrow arrow-down  "></i>
                                        </div>
                                        <div>:</div>
                                        <div class="start-time-minutes">
                                            <i class="fa-solid fa-chevron-up arrow arrow-up"></i>
                                            <div class="minutes">30</div>
                                            <i class="fa-solid fa-chevron-down arrow arrow-down  "></i>
                                        </div>
                                        <div class="start-time-meridian">
                                            <i class="fa-solid fa-chevron-up arrow arrow-up"></i>
                                            <div class="meridian">AM</div>
                                            <i class="fa-solid fa-chevron-down arrow arrow-down"></i>
                                        </div>

                                    </div>


                                </div>
                                <div class="end-time">
                                    <input class="end-time-display entry" placeholder="End time">
                                    <div class="error-message">
                                        this is required
                                    </div>
                                    <div class="end-time-dropdown time-dropdown">

                                        <div class="end-time-hours">
                                            <i class="fa-solid fa-chevron-up arrow arrow-up"></i>
                                            <div class="hours">9</div>
                                            <i class="fa-solid fa-chevron-down arrow arrow-down "></i>
                                        </div>
                                        <div>:</div>
                                        <div class="end-time-minutes">
                                            <i class="fa-solid fa-chevron-up arrow arrow-up"></i>
                                            <div class="minutes">30</div>
                                            <i class="fa-solid fa-chevron-down arrow  arrow-down "></i>
                                        </div>
                                        <div class="end-time-meridian">
                                            <i class="fa-solid fa-chevron-up arrow arrow-up"></i>
                                            <div class="meridian">AM</div>
                                            <i class="fa-solid fa-chevron-down arrow arrow-down "></i>
                                        </div>

                                    </div>

                                </div>
                        
                        </div>
                        <div class="duration">
                        <input class="duration-display" value="0h 0m">
                        
                        </div>
                        <div class="action">
                        <i class="fa-solid fa-trash delete-btn"></i>
                        </div>
                        `
        AllEntriesDiv.append(userEntryDiv);

        let deleteButton = userEntryDiv.querySelector(".delete-btn");
        let startTimeInput = userEntryDiv.querySelector(".start-time-display");
        let endTimeInput = userEntryDiv.querySelector(".end-time-display");

        let startTimeArrows =userEntryDiv.querySelectorAll(".start-time-dropdown .arrow");
        let endTimeArrows =userEntryDiv.querySelectorAll(".end-time-dropdown .arrow");

        handleDeleteBtn(deleteButton);
        handleStartTimeDisplay(startTimeInput) ;
        handleEndTimeDisplay(endTimeInput);
        handleTimeValue(userEntryDiv,startTimeArrows, endTimeArrows);
        handleTaskDetialsCount(userEntryDiv);
    })
}

function handleTaskDetialsCount(div ){
    let input = div.querySelector(".task-details-text");
    let parent = input.parentElement ; 
    let countDisplay = parent.querySelector(".count") ; 
    input.addEventListener("input",function (e){
        countDisplay.innerHTML = e.target.value.length.toString() + "/" + "255" ; 
    })
}
function showError(parent, reason) {
    if (reason == "") {
        let error = document.querySelector(`.${parent} .error-message`);
        error.innerText = reason;
        error.classList.remove("show-error-message");
    }
    //   parent is end-time or start-time 
    else {

        let error = document.querySelector(`.${parent} .error-message`);
        error.innerText = reason;
        error.classList.add("show-error-message");
    }

}

// button functions 
function requiredInputCheck(div) {
    let change = true ; 
    let userEntries = div.querySelectorAll(".entry");
    for (let entry of userEntries) {
        
        let pE = entry.parentElement.classList[0];
        if (entry.value.length == 0) {
            // console.log(a.parentElement);
            showError(pE, "this is required");
            change = false ; 
        }
        else{
            showError(pE,"");
           
        }
    }
    return change ; 
}
function handleSaveButton(e) {
    e.preventDefault();

    let result  = requiredInputCheck(document);
    // if(result){

    // }
}
function handleSubmitButton(e) {
    e.preventDefault();
   let result  = requiredInputCheck(document);
    // if(result){
    
    // }
    

}


function handleDeleteBtn(deleteButton) {
    deleteButton.addEventListener("click", function (e) {
        e.currentTarget.parentElement.parentElement.remove();
    })
}

// ADDING EVENT LISNERS : 

function addEventToEntry(userEntries) {
    for (let entry of userEntries) {
        entry.addEventListener("input", function (e) {
            if (entry.value.length != 0) {
                let pE = entry.parentElement.classList[0];
                let error = document.querySelector(`.${pE} .error-message`);

                if (error.classList.contains("show-error-message")) {
                    error.classList.remove("show-error-message");
                }
            }
        })
        
    }
}

// HANDLING START AND END TIME 
function handleStartTimeDisplay(startTimeInput) {

    console.log(startTimeInput);
    startTimeInput.addEventListener("click", function (e) {
        console.log(e.target.parentElement.querySelector(".time-dropdown"));
        let dropdown = e.target.parentElement.querySelector(".time-dropdown");
        dropdown.style.display = "flex";

        if (!dropdown.hasClickHandler) {
            document.addEventListener("click", function (e) {
                if (!dropdown.contains(e.target) && e.target !== startTimeInput) {
                    dropdown.style.display = "none";
                }
            })
            hasClickHandler = true;
        }



    })

}
function handleEndTimeDisplay(endTimeInput) {
    endTimeInput.addEventListener("click", function (e) {
        console.log(e.target.parentElement.querySelector(".time-dropdown"));
        let dropdown = e.target.parentElement.querySelector(".time-dropdown");
        dropdown.style.display = "flex";


        if (!dropdown.hasClickHandler) {
            document.addEventListener("click", function (e) {
                if (!dropdown.contains(e.target) && e.target !== endTimeInput) {
                    dropdown.style.display = "none";
                }
            })
            hasClickHandler = true;
        }


    })

}

// dates 


function handleTimeValue(div, startTimeArrows, endTimeArrows) {

    function showError(parent, reason) {
        if (reason == "") {
            let error = div.querySelector(`.${parent} .error-message`);
            error.innerText = reason;
            error.classList.remove("show-error-message");
        }
        //   parent is end-time or start-time 
        else {
    
            let error = div.querySelector(`.${parent} .error-message`);
            error.innerText = reason;
            error.classList.add("show-error-message");
        }
    
    }

    function updateDuration(sD , eD){
        console.log("hi")
        let durationDisplay = div.querySelector(".duration-display") ; 
         let diffInMs = eD - sD ; 
         let hours = Math.floor(diffInMs / (1000 * 60 * 60));
   let minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
          durationDisplay.innerText=  hours+"h"+minutes+"m";
    }

    function validateStartAndEnd(startDate, endDate) {
        if (startDate != undefined && endDate != undefined) {
            let endTimeDisplay = div.querySelector(".end-time-display");
            let parent = endTimeDisplay.parentElement.classList[0];
            if (startDate >= endDate) {
                showError(parent, "End Time Must be more than start time");
            }
            else {
                showError(parent, "");
            }

            updateDuration(startDate,endDate) ; 
        }
    }
    function createDate(hours, minutes, period) {

        let time = new Date();
        let adjustedHours = hours % 12;
        if (period.toLowerCase() == "pm") {
            adjustedHours += 12;
        }
        time.setHours(adjustedHours);
        time.setMinutes(minutes);
        time.setSeconds(0);

        return time

    }

    function changeTimeInDisplay(startOrEnd) {
        let startDate;
        let endDate;
        let startTimeDisplay = div.querySelector(".start-time-display");
        let endTimeDisplay = div.querySelector(".end-time-display");
        let displayString;
        let h1 = div.querySelector(`.start-time-dropdown .hours`).innerText;
        let m1 = div.querySelector(".start-time-dropdown .minutes").innerText;
        let meridian1 = div.querySelector(".start-time-dropdown .meridian").innerText;
        let h2 = div.querySelector(".end-time-dropdown .hours").innerText;
        let m2 = div.querySelector(".end-time-dropdown .minutes").innerText;
        let meridian2 = div.querySelector(".end-time-dropdown .meridian").innerText;
        if (startOrEnd == "startTime") {
            if (Number(h1) < 10) {
                h1 = "0" + h1;
            }
            startTimeDisplay.value = h1 + " " + ":" + " " + m1 + " " + meridian1.toLowerCase();
            // IMPORTANT DISPLACTCH EV ENT 
            startTimeDisplay.dispatchEvent(new Event('input', { bubbles: true }));
        }
        else if (startOrEnd == "endTime") {
            if (Number(h2) < 10) {
                h2 = "0" + h2;
            }
            endTimeDisplay.value = h2 + " " + ":" + " " + m2 + " " + meridian2.toLowerCase();
            endTimeDisplay.dispatchEvent(new Event('input', { bubbles: true }));
            
        }
        if (startTimeDisplay.value != "") {
            startDate = createDate(Number(h1), Number(m1), meridian1);
        }
        if (endTimeDisplay.value != "") {
            endDate = createDate(Number(h2), Number(m2), meridian2);
        }
         
        
        
        validateStartAndEnd(startDate, endDate)



    }

    function handleTime(main, arrowStatus, startOrEnd) {

        let type = main.classList[0]; //hours or minutes
        let prevValue = main.innerText;
        if (type != "meridian") {
            prevValue = Number(main.innerText);
        }

        if (type == "hours") {
            if (arrowStatus == "up") {
                prevValue += 1
                if (prevValue == 13) {
                    prevValue = 1;
                }
                main.innerText = prevValue.toString();
            }
            else if (arrowStatus == "down") {
                prevValue -= 1
                if (prevValue == 0) {
                    prevValue = 12;
                }
                main.innerText = prevValue.toString();
            }
        }
        else if (type == "minutes") {
            if (arrowStatus == "up") {
                prevValue += 1
                if (prevValue == 61) {
                    prevValue = 0;
                }

                if (prevValue < 10) {
                    prevValue = "0" + prevValue;
                }
                main.innerText = prevValue.toString();
            }
            else if (arrowStatus == "down") {
                prevValue -= 1
                if (prevValue == -1) {
                    prevValue = 60;
                }
                if (prevValue < 10) {
                    prevValue = "0" + prevValue;
                }
                main.innerText = prevValue.toString();
            }
        }
        else if (type == "meridian") {

            if (prevValue == "AM") {
                main.innerText = "PM";
            }
            else {
                main.innerText = "AM";

            }
        }
        changeTimeInDisplay(startOrEnd);

    }


    function handleArrowClick(e, startOrEnd) {
        let arrow = e.target;

        if (arrow.classList.contains("arrow-up")) {
            let main = arrow.nextElementSibling;
            handleTime(main, "up", startOrEnd);

        }
        else if (arrow.classList.contains("arrow-down")) {
            let main = arrow.previousElementSibling;

            handleTime(main, "down", startOrEnd);
        }

    }


    //  INSIDE FUNCTION 
    for (let a of startTimeArrows) {
        a.addEventListener("click", function (e) {
            
            handleArrowClick(e, "startTime");
        })
    }
    for (let b of endTimeArrows) {
        b.addEventListener("click", function (e) {
            handleArrowClick(e, "endTime");
        })
    }
}


let logTime = "09 : 30 AM";

// let form1 = document.forms.userForm;
let form1 = document.getElementById("userForm");

let AllEntriesDiv = document.querySelector(".all-entries");
let saveButton = document.querySelector(".save-btn");
let submitButton = document.querySelector(".submit-btn");
let userEntries = document.querySelectorAll(".entry");
let NewEntryButton = document.querySelector(".add-new-entry");
let deleteButton = document.querySelector(".delete-btn");
let startTimeInput = document.querySelector(".start-time-display");
let endTimeInput = document.querySelector(".end-time-display");
let startTimeArrows = document.querySelectorAll(".start-time-dropdown .arrow");
let endTimeArrows = document.querySelectorAll(".end-time-dropdown .arrow");





// saveButton.addEventListener("click", function (e) { handleSaveButton(e); });
// submitButton.addEventListener("click", function (e) { handleSubmitButton(e); });

// adding event lisner to userentries input 
addEventToEntry(userEntries);
handleNewEntryBtn(NewEntryButton);
handleDeleteBtn(deleteButton);

handleStartTimeDisplay(startTimeInput);
handleEndTimeDisplay(endTimeInput);

handleTimeValue(document , startTimeArrows, endTimeArrows);

handleTaskDetialsCount(document) ; 

form1.addEventListener("submit" , function (e){
   e.preventDefault();
   console.log("hi");
   let formData = new FormData(form1); 
   let formObject = {} ;
   let jsonString ;  
   formData.forEach((value, key) => {
    formObject[key] = value;
     jsonString = JSON.stringify(formObject);
}

);
console.log(jsonString);
 
})

console.log(form1) ; 