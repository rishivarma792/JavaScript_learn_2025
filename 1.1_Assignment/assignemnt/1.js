

const names1 = [
    "Alice", "Andrew", "Amelia",
    "Benjamin", "Bella", "Brian",
    "Charlotte", "Charles", "Chloe",
    "Daniel", "Diana", "David",
    "Emily", "Ethan", "Emma",
    "Fiona", "Frank", "Faith",
    "Grace", "George", "Gabriel",
    "Hannah", "Henry", "Hazel",
    "Isaac", "Isabella", "Ian",
    "James", "Julia", "Jack",
    "Kevin", "Katherine", "Kyle",
    "Liam", "Laura", "Lucas",
    "Michael", "Mia", "Matthew",
    "Noah", "Natalie", "Nathan",
    "Olivia", "Oscar", "Owen",
    "Paul", "Penelope", "Peter",
    "Quinn", "Quentin", "Queenie",
    "Rachel", "Ryan", "Robert",
    "Sophia", "Samuel", "Sarah",
    "Thomas", "Taylor", "Tiffany",
    "Ulysses", "Uma", "Ursula",
    "Victoria", "Vincent", "Valerie",
    "William", "Wendy", "Wyatt",
    "Xavier", "Xena", "Xander",
    "Yvonne", "Yusuf", "Yasmin",
    "Zoe", "Zachary", "Zara"
];

const names = names1.map((name, index) => ({
    id: index + 1,
    name: name,
    img: `./img1.jpg`
}));




function createList(arr,dropdown){     
    dropdown.innerHTML = " " ; 
    for(let i= 0 ;i<arr.length ; i++){
        let li = document.createElement("li") ; 
        li.textContent = arr[i].name ;
        li.classList.add("profile") ; 
        li.onclick = function (e) { addProfile(e)} ; 
        let img = document.createElement("img") ; 
        img.src = arr[i].img ; 
        img.alt = "profile-image" ; 
        img.classList.add("profile-image") ; 
        li.prepend(img);
        dropdown.append(li);
        
    }
    
    
 }

 function addProfile(e){
    dropdown.style.display = "none" ;
     console.log(e.target.textContent);
     let span = document.createElement("span") ; 
     span.classList.add("profile-added") ; 
     span.innerText=e.target.textContent ; 
     span.setAttribute("contenteditable", "false");   //IMPORTANT TPO GET FOCUS BACK TO DIV
     console.log(span); 

    let i = userInput.innerHTML.lastIndexOf("@") ; 
    console.log(i);
     let prevString  = userInput.innerHTML.substring(0,i) ; 
     console.log("prev string "+prevString);
     userInput.innerHTML = prevString ; 
     userInput.append(span) ; 
    
    //  USING RANGE ANS SELECTION HOW TO FOCUS AFTER SPAN 
     let range = document.createRange();
    let sel = window.getSelection();
    range.setStartAfter(span);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    userInput.focus();

    
    }
    
    function createArray(input){
        console.log(input);
        
        let i = input.lastIndexOf("@") ; 
        let string = input.substring(i+1) ;
        // console.log("string is " + string);
        if(string==""){
            createList(names,dropdown);
        }
        else{
            
            let newArr = names.filter((value)=>{
  
           if(value.name.startsWith(string) ||value.name.toLowerCase().startsWith(string) ){
            console.log(value.name);
               return true ; 
            }
        })
        if(newArr.length==0){
            newArr = [{name : "EveryOne",img:"./img1.jpg"}];
        }
        console.log(newArr);
        createList(newArr,dropdown);
    
}
    }



let dropdown = document.getElementsByClassName("names-list")[0] ; 
let userInput = document.getElementById("user-input"); 
dropdown.style.display = "none" ; 
let commentButton = document.getElementsByClassName("btn-comment")[0] ; 
let commentBox = document.getElementsByClassName("comment-box")[0];

userInput.addEventListener("input", function (event){
    // let i = event.target.innerText.lastIndexOf("@") ; 
    // console.log(i);
    // console.log(event.target.innerText[i-1]);
    // if(!event.target.innerText.includes("@")){
    //     dropdown.style.display = "none" ;

    // }

    // else if( i==0 ||  event.target.innerText[i-1]==" "){
            
    //         dropdown.style.display = "" ;
    //         createArray(event.target.innerText);
    // }

    let i = event.target.innerText.lastIndexOf("@");
    console.log(i);
    console.log(event.target.innerText[i - 1]);

    if (!event.target.innerText.includes("@")) {
        dropdown.style.display = "none";
    } else {
        let charBeforeAt = event.target.innerText[i - 1];
        if (i === 0 || !/[a-zA-Z]/.test(charBeforeAt)) {  // used regular exp to check for any char before 
            dropdown.style.display = "";
            createArray(event.target.innerText);
        } else {
            dropdown.style.display = "none";
        }
    }   

   

    
})
commentButton.addEventListener("click", function(e){
    if(userInput.innerText==""){
        alert("PLEASE ENTER MESSAGE");
        return ; 
    }
    // creating message
    let div1 = document.createElement("div") ; 
    div1.classList.add("comment") ; 
    let img = document.createElement("img") ; 
    img.src = "./img1.jpg" ; 
    img.alt="my-photo" ; 
    img.classList.add("comment-image") ; 
    div1.append(img) ;


    let div = document.createElement("div") ; 
    div.classList.add("user-details"); 
    let p2 = document.createElement("p") ; 
    p2.classList.add("comment-name") ; 
    p2.textContent="Rishi Alluri"
    div.append(p2) ; 
    let p3 = document.createElement("p") ;
    p3.classList.add("message") ;
    p3.innerHTML = userInput.innerHTML ; 
    div.append(p3) ;  

    div1.append(div) ; 

    commentBox.append(div1);
    userInput.innerHTML = "";
    


})




  