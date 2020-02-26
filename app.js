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
name.focus();
otherInput.style.display = 'none';

console.log(paymentOptions.children);

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

    if(paymentOptions.children[1].selected === true){

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

    };
    
});


