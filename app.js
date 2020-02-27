const name = document.querySelector('input#name');
const inputs = document.querySelectorAll('input');
const otherInput = document.querySelector('#other-title');
const jobRoleDropDown = inputs[2].nextElementSibling;
const selectDesign = document.querySelector('#design');
selectDesign.firstElementChild.style.display = 'none';
const jsPuns = selectDesign.firstElementChild;
const iLoveJs = selectDesign.firstElementChild.firstElementChild;
const activities = document.querySelector('.activities');
const activitiesGroup = activities.querySelectorAll('input');
let totalCount = 0;
let totalCountDisplay = document.createElement('DIV');
const paymentSection = activities.nextElementSibling;
const paymentOptions = paymentSection.children[2];
const creditCardOption = paymentOptions.children[1];
let valid = 0;


// Error messages

const parentName = inputs[0].parentElement;
const parentEmail = inputs[1].parentElement;
const parentActivities = inputs[3].parentElement;
const parentCreditCard = inputs[10].parentElement;
const parentZip = inputs[11].parentElement;
const parentCvv = inputs[12].parentElement;


function createErrorMessage(parentElement, element, errorMessage){

    const errorElement = document.createElement('div');
    errorElement.innerText = errorMessage;
    errorElement.style.color = 'red';
    parentElement.insertBefore(errorElement, element);
    errorElement.style.display = 'none';
};

// ERROR NAME
createErrorMessage(parentName,inputs[0], 'Type your name *');

// ERROR EMAIL

createErrorMessage(parentEmail,inputs[1], 'Type your Email *');

// ERROR ACTIVITIES

createErrorMessage(parentActivities,inputs[3], 'Select at least one option *');

// ERROR CREDITCARD

createErrorMessage(parentCreditCard,inputs[10], 'Type a valid credit card number *');

// ERROR ZIP

createErrorMessage(parentZip,inputs[11], '(5 digits) *');
// ERROR CVV

createErrorMessage(parentCvv,inputs[12], '(3 digits) *');


console.log(inputs);

// FIRST SECTION

name.focus();
otherInput.style.display = 'none';

// JOB ROLE SECTION

jobRoleDropDown.addEventListener('change', (e)=>{

    if( e.target.value == 'other'){
        otherInput.style.display = 'block';
        otherInput.focus();
    } else{
        otherInput.style.display = 'none';
    }
});

// T-SHIRT SECTION 

// HIDE SELECT THEME OPTION FROM MENU



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

// Validate Name function

function validateName(){

    const name = inputs[0];
    let isValid = false;

    if (name.value.length > 0){
        isValid = true;
        name.style.borderColor = '';
        name.previousElementSibling.style.display = 'none';

    } else {
        isValid = false;
        name.style.borderColor = 'red';
        name.previousElementSibling.style.display = 'block';
        name.focus();
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
        email.previousElementSibling.style.display = 'none';
        let isValid = true;

    } else {
        email.style.borderColor = 'red';
        email.previousElementSibling.style.display = 'block';
        let isValid = false;
    };
    return isValid;
};

// Validate Activities

function validateActivities(){

    const activitiesValidation = inputs[3];
    let isValid = false;

    if(totalCount !== 0){
        activitiesValidation.previousElementSibling.style.display = 'none';
        isValid = true;

    } else {
        isValid = false;
        activitiesValidation.previousElementSibling.style.display = 'block';
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

    } else {
        isValid = false;
        paymentOptions.previousElementSibling.style.color = 'red';
    };
    
    return isValid;
};

// Validate Credit card Number

function validateCreditCardNumber() {

    const ccNum = inputs[10];
    let isValid = false;
    if (ccNum.value.length >= 13 && ccNum.value.length <= 16 && isNaN(ccNum.value) === false){
        isValid = true;
        ccNum.style.borderColor = '';
        ccNum.previousElementSibling.style.display = 'none';
        valid += 1

    } else {
        isValid = false;
        ccNum.style.borderColor = 'red';
        ccNum.previousElementSibling.style.display = 'block';
    };

    return isValid;
};

// Validate zip code

function validateZipCode(){

    const zipCode = inputs[11];
    let isValid = false;

    if (zipCode.value.length == 5 && isNaN(zipCode.value) === false){
        isValid = true;
        zipCode.style.borderColor = '';
        zipCode.previousElementSibling.style.display = 'none';
        valid += 1
    } else {
        isValid = false;
        zipCode.style.borderColor = 'red';
        zipCode.previousElementSibling.style.display = 'block';
    };

    return isValid;
};

function validateCvv(){

    const cvv = inputs[12];
    let isValid = false;

    if (cvv.value.length == 3 && isNaN(cvv.value) === false){
        isValid = true;
        cvv.style.borderColor = '';
        cvv.previousElementSibling.style.display = 'none';
        valid += 1
    } else {
        isValid = false;
        cvv.style.borderColor = 'red';
        cvv.previousElementSibling.style.display = 'block';
    };
    return isValid;
}

// Prevent from submiting

$("form").on('submit',(e)=>{

    // NAME
    if(!validateName()){
        e.preventDefault();
    };

    // EMAIL

    if(!validateEmail()){
        e.preventDefault();
    };

    // Activities section

    if (!validateActivities()){
        e.preventDefault();
    };

    // Payment options

    if (!validatePaymentOptions()){
        e.preventDefault();
    };

    // Creditcard option

    if(paymentOptions.children[1].selected === true){

        if (!validateCreditCardNumber()){
            e.preventDefault();
        };

        if (!validateZipCode()){
            e.preventDefault();
        };

        if (!validateCvv()){
            e.preventDefault();
        };
    
    };
    
});


