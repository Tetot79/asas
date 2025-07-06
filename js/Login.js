let password = document.querySelectorAll(".password");
let firstName = document.querySelectorAll(".firstname");
let secondName = document.querySelectorAll(".secondname");
let email = document.querySelectorAll(".email");

let labelPassword = document.querySelectorAll(".password-label");
let labelFirstName = document.querySelectorAll(".firstname-label");
let labelSecondName = document.querySelectorAll(".secondname-label");
let labelEmail = document.querySelectorAll(".email-label");
let allLabels = document.querySelectorAll(".LLA");

let btn = document.querySelectorAll("p span");
let bigDiv = document.querySelector(".login-register-container");
let reg = document.querySelector(".Reg");

let flag = true;
let num = 0;

let hasRegisterHash = window.location.hash === '#register';
if (hasRegisterHash) {
    bigDiv.style.transform = "rotateY(180deg)";
    flag = false;
}

function enhanceLabelInteractions(labels) {
    labels.forEach(label => {
        label.addEventListener("click", () => {
            label.style.transform = "translate(10px, 10px)";
            label.style.opacity = "1";
            label.style.color = "white";
        });

        label.addEventListener("mouseleave", () => {
            const hasValue = label.value || label.getAttribute("data-filled") === "true";
            label.style.transform = hasValue ? "translate(10px, 15px)" : "translate(20px, 45px)";
            label.style.opacity = hasValue ? "1" : "0.6";
            label.style.color = hasValue ? "white" : "var(--third-color)";
        });
    });
}

function addBttonSpanEvent(btn) {
    btn.forEach(span => {
        span.addEventListener("click", () => {
            if(!flag){
                window.location.hash = "#login";
                if(window.location.hash === "#login"){
                    bigDiv.style.transform = "rotateY(0deg)";
                }
            }
            else{
                
                window.location.hash = "#register";
                if(window.location.hash === "#register"){
                    bigDiv.style.transform = "rotateY(180deg)";
                }
            }
            flag = !flag;
        });
    });
}


function addFocusAndBlurEvents(inputs, labels) {
    inputs.forEach((input, index) => {
        const label = labels[index]; 

        input.addEventListener("focus", () => {
            label.style.transform = "translate(10px, 5px)";
            label.style.opacity = "1";
            label.style.color = "white";
        });

        input.addEventListener("blur", () => {
            if (input.value === "") {
                label.style.transform = "translate(20px, 45px)";
                label.style.opacity = "0.6";
                label.style.color = "var(--third-color)";
                label.setAttribute("data-filled", "false");
            } else {
                label.style.transform = "translate(10px, 15px)";
                label.style.opacity = "1";
                label.style.color = "white";
                label.setAttribute("data-filled", "true");
            }
        });
    });
}
let homePage = document.querySelector(".login-img-container");
if(homePage){
    homePage.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}

enhanceLabelInteractions(allLabels);
addBttonSpanEvent(btn);
addFocusAndBlurEvents(password, labelPassword);
addFocusAndBlurEvents(firstName, labelFirstName);
addFocusAndBlurEvents(secondName, labelSecondName);
addFocusAndBlurEvents(email, labelEmail);
