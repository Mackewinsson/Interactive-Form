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

addEventListener('change', (e)=>{


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
const nameField = inputs[0];
const emailField = inputs[1];

// Validate Name function

function validateName(){
    if(nameField.value){
        nameField.style.borderColor = '';
        return true;
    } else{
        alert("You have to write your name");
        nameField.setAttribute('placeholder', 'Write your name *');
        nameField.focus();
        nameField.style.borderColor = 'red';
        return false;
    }
};

// Validate email function

function  validateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inputText.value.match(mailformat)){

        emailField.style.borderColor = '';
        return true;

    } else {
        alert("You have entered an invalid email address!");
        emailField.focus();
        emailField.style.borderColor = 'red';
        emailField.setAttribute('placeholder', 'Write your email *');
        return false;
    };
};

$("form button").on('click submit',(e)=>{ 

    if (nameField.value == '') {
        // NAME
        e.preventDefault();
        validateName();
        validateEmail(emailField);
        nameField.focus();
    }; 
    
    if(nameField.value || emailField.value){

        // EMAIL
        e.preventDefault();
        validateName();
        validateEmail(emailField);

    };
    
    if (totalCount > 0){
        e.preventDefault(); 
        alert('must select at least one')
    };
});


/*
Form validation

If any of the following validation errors exist, prevent the user from submitting the form:

1.Name field can't be blank.

2.Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.

3.User must select at least one checkbox under the "Register for Activities" section of the form.

4.If the selected payment option is "Credit Card," make sure the user has supplied a Credit Card number, a Zip Code, and a 3 number CVV value before the form can be submitted.

5.Credit Card field should only accept a number between 13 and 16 digits.

6. The Zip Code field should accept a 5-digit number.

The CVV should only accept a number that is exactly 3 digits long.

NOTE: Don't rely on the built in HTML5 validation by adding the required attribute to your DOM elements. You need to actually create your own custom validation checks and error messages.

NOTE: Avoid using snippets or plugins for this project. To get the most out of the experience, you should be writing all of your own code for your own custom validation.

NOTE: Make sure your validation is only validating Credit Card info if Credit Card is the selected payment method.*/

