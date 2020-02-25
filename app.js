const name = document.querySelector('input#name');
name.focus();
const otherInput = document.querySelector('#other-title');
otherInput.style.display = 'none';

/* T-SHIRT SECTION */

// HIDE SELECT THEME OPTION FROM MENU

const selectDesign = document.querySelector('#design');
selectDesign.firstElementChild.style.display = 'none';
const jsPuns = selectDesign.firstElementChild;
const iLoveJs = selectDesign.firstElementChild.firstElementChild;

// Until a theme is selected from the “Design” menu, no color options appear in the “Color” drop down and the “Color” field reads “Please select a T-shirt theme”.

const selectColor = document.querySelector('#color');
const options = selectColor.querySelectorAll('option');
const selectTshirt = document.createElement('option');
selectTshirt.textContent = 'Please select a T-shirt theme';
const firstColorOption = selectColor.firstElementChild;
selectColor.insertBefore(selectTshirt, firstColorOption);
selectTshirt.selected = true;

for(let i = 0; i < options.length  ; i += 1){

    options[i].style.display = 'none';
};

// DONE

/*

For the T-Shirt "Color" menu, after a user selects a theme, only display the color options that match the design selected in the "Design" menu.

1. If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
2. If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."

*/

selectDesign.addEventListener('change', (e)=>{

    if(e.target.value == 'js puns'){

        selectTshirt.selected = false;
        selectTshirt.style.display = 'none';

        for(let i = 0; i < options.length  ; i += 1){
            
            if(options[i].value === 'cornflowerblue'){
                options[i].style.display = 'block';
                options[i].selected = true;
            } else if(options[i].value === 'darkslategrey'){
                options[i].style.display = 'block';
            } else if(options[i].value === 'gold'){
                options[i].style.display = 'block';
            } else if(options[i].value === 'tomato'){
                options[i].style.display = 'none';
            } else if(options[i].value === 'steelblue'){
                options[i].style.display = 'none';
            } else if(options[i].value === 'dimgrey'){
                options[i].style.display = 'none';
            }; 
        };

    } else if(e.target.value == 'heart js'){

        for(let i = 0; i < options.length  ; i += 1){
            
            if(options[i].value === 'cornflowerblue'){
                options[i].style.display = 'none';
                options[i].selected = false;
            } else if(options[i].value === 'darkslategrey'){
                options[i].style.display = 'none';
            } else if(options[i].value === 'gold'){
                options[i].style.display = 'none';
            } else if(options[i].value === 'tomato'){
                options[i].style.display = 'block';
                options[i].selected = true;
            } else if(options[i].value === 'steelblue'){
                options[i].style.display = 'block';
            } else if(options[i].value === 'dimgrey'){
                options[i].style.display = 'block';
            };
        };
    }

});

/* ”Register for Activities” section
Some events are at the same day and time as others. If the user selects a workshop, don't allow selection of a workshop at the same day and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.

Project Warm Up: This section of the project, working with checkboxes, is one of the trickier parts of the project. For some helpful practice, check out the project Warm Up Checkboxes.*/

const activities = document.querySelector('.activities');
const activitiesGroup = activities.querySelectorAll('input');
let totalCount = 0;
let totalCountDisplay = document.createElement('DIV');
totalCountDisplay.textContent = 'TOTAL: ' + totalCount;
activities.appendChild(totalCountDisplay);


activities.addEventListener('change', (e) =>{
// Checks if a checkbox is checked
    if(e.target.checked === true){
// Check if one of the inputs has the same date and time and if it does, gray it out
        const inputChecked = e.target;
        const inputAttribute = inputChecked.getAttribute('data-day-and-time');
        let inputValue = Number(inputChecked.getAttribute('data-cost'));
        totalCount += inputValue;
        totalCountDisplay.textContent = 'TOTAL: $' + totalCount;

        if (inputChecked.hasAttribute('data-day-and-time')){
            for(let i = 0; i < activitiesGroup.length; i++){
                if (activitiesGroup[i].getAttribute('data-day-and-time') === inputAttribute){
                    activitiesGroup[i].disabled = true;
                    inputChecked.disabled = false;
                }
            };
        };

    } else if(e.target.checked === false){

        const inputChecked = e.target;
        const inputAttribute = inputChecked.getAttribute('data-day-and-time');
        let inputValue = Number(inputChecked.getAttribute('data-cost'));
        totalCount -= inputValue;
        totalCountDisplay.textContent = 'TOTAL: $' + totalCount;

        if (inputChecked.hasAttribute('data-day-and-time')){
            for(let i = 0; i < activitiesGroup.length; i++){
                if (activitiesGroup[i].getAttribute('data-day-and-time') === inputAttribute){
                    activitiesGroup[i].disabled = false;
                    inputChecked.disabled = false;
                }
            };
        };
    };
});

/*"Payment Info" section
Display payment sections based on the payment option chosen in the select menu.

The "Credit Card" payment option should be selected by default. Display the #credit-card div, 
and hide the "PayPal" and "Bitcoin" information. Payment option in the select menu should match 
the payment option displayed on the page.

When a user selects the "PayPal" payment option, the PayPal information should display, 
and the credit card and “Bitcoin” information should be hidden.

When a user selects the "Bitcoin" payment option, the Bitcoin information should display, 
and the credit card and “PayPal” information should be hidden.

NOTE: The user should not be able to select the "Select Payment Method" option from the payment select menu, because the user should not be able to submit the form without a chosen payment option.*/

const paymentSection = activities.nextElementSibling;
const paymentOptions = paymentSection.children[2];
const creditCardOption = paymentOptions.children[1];

creditCardOption.selected = true;
$('#paypal').hide();
$('#bitcoin').hide();

paymentSection.addEventListener('change', (e)=>{


        if(e.target.value === 'credit card'){

            $('#paypal').hide();
            $('#bitcoin').hide();
            $('#credit-card').show();

        } else if (e.target.value === 'paypal'){

            $('#paypal').show();
            $('#bitcoin').hide();
            $('#credit-card').hide();

        } else if (e.target.value === 'bitcoin'){

            $('#paypal').hide();
            $('#bitcoin').show();
            $('#credit-card').hide();

        } else if (e.target.value === 'select method'){
            
            creditCardOption.selected = true;
        }

});

const inputs = document.querySelectorAll('input');

let valid = 0;

// Validate Name function

function validateName(){

    const name = inputs[0];
    let isValid = false;

    if (name.value.length > 0){
        isValid = true;
        name.style.borderColor = '';
        valid += 1

    } else if(name.value.length === 0){
        isValid = false;
        name.style.borderColor = 'red';
        name.setAttribute('placeholder', 'Write your name *');
        name.focus();
    } else {
        isValid = false;
        name.style.borderColor = 'red';
        name.focus();
    };

    if(isValid === false) {
        alert("You have to write your name");
     };
     return isValid;
};

// Validate email function

function  validateEmail(){
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = inputs[1];
    let isValid = false;
    if(email.value.match(mailformat)){

        email.style.borderColor = '';
        let isValid = true;
        valid += 1

    } else {
        alert("You have entered an invalid email address!");
        email.style.borderColor = 'red';
        email.setAttribute('placeholder', 'Write your email *');
        let isValid = false;
    };
    return isValid;
};

// Validate Activities

function validateActivities(){

    let isValid = false;

    if(totalCount !== 0){
        activities.style.border = '';
        activities.style.borderColor = '';
        isValid = true;
        valid += 1

    } else {
        isValid = false;
        alert('must select at least one');
        activities.style.border = '2px solid red';
        activities.style.borderColor = 'red';
    };
    return isValid;  
}




// Validate Payment options

function validatePaymentOptions(){

    let counter;
    let isValid;

    for(let i = 0; i < paymentOptions.children.length; i++ ){
        if (paymentOptions.children[i].selected){
            counter += 1;
        };
    };

    if (counter !== 0){
        isValid = true;
        valid += 1
    } else {
        isValid = false;
        paymentOptions.previousElementSibling.style.color = 'red';
        alert('You must select al least one payment option');
    };
    
    return isValid;
};

// Validate Credit card Number

function validateCreditCardNumber() {

    const ccNum = inputs[10];
    let isValid = false;
    if (ccNum.value.length >=13 && ccNum.value.length <= 16 && isNaN(ccNum.value) === false){
        isValid = true;
        ccNum.style.borderColor = '';
        valid += 1

    } else if(ccNum.value.length === 0){
        isValid = false;
        ccNum.style.borderColor = 'red';
    } else {
        isValid = false;
        ccNum.style.borderColor = 'red';
    };
  
    if(isValid === false) {
       alert("Please provide a valid credit card number!");
    };

    return isValid;
};

// Validate zip code

function validateZipCode(){

    const zipCode = inputs[11];
    let isValid = false;

    if (zipCode.value.length == 5){
        isValid = true;
        zipCode.style.borderColor = '';
        valid += 1
    } else if(zipCode.value.length === 0){
        isValid = false;
        zipCode.style.borderColor = 'red';
    } else {
        isValid = false;
        zipCode.style.borderColor = 'red';
    }

    if(isValid === false) {
        alert("Please provide a 5 digit zipcode number!");
    };
    return isValid;
};

function validateCvv(){

    const cvv = inputs[12];
    let isValid = false;

    if (cvv.value.length == 3){
        isValid = true;
        cvv.style.borderColor = '';
        valid += 1
    } else if(cvv.value.length === 0){
        isValid = false;
        cvv.style.borderColor = 'red';
    } else {
        isValid = false;
        cvv.style.borderColor = 'red';
    }

    if(isValid === false) {
        alert("Please provide a 3 digit CVV number!");
     };
    return isValid;
}

// Prevent from submiting



$("form button").on('click submit',(e)=>{

    // NAME
    if (inputs[0].value.length !== 0) {
        validateName();
    } else{
        validateName();
        e.preventDefault();

    };
    
    // EMAIL

    if(inputs[1].value.length !== 0){
        validateEmail(inputs[1]);

    } else{
        validateEmail(inputs[1]);
        e.preventDefault();
    };

    // Activities section

    if (totalCount !== 0){
        validateActivities();
    } else{
        validateActivities();
        e.preventDefault();
    };

    // Payment options

    if (paymentOptions.length !== 0){
        validatePaymentOptions();
    } else{
        validatePaymentOptions();
        e.preventDefault();
    }
    // Creditcard option

    if(inputs[10].value.length !== 0){
        validateCreditCardNumber();
    } else {
        validateCreditCardNumber();
        e.preventDefault();
    };

    // Zip code

    if (inputs[11].value.length !== 0){
        validateZipCode();
    } else {
        validateZipCode();
        e.preventDefault();
    };

    // CVV

    if(inputs[12].value.length !== 0){
        validateCvv();
    } else {
        validateCvv();
        e.preventDefault();
    };
});




