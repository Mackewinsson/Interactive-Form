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
const activitiesGroup = activities.children;
let totalCount = 0;


activities.addEventListener('change', (e) =>{
// Checks if a checkbox is checked
    if(e.target.checked === true){
// Check if one of the inputs has the same date and time and if it does, gray it out
        const inputAttribute = e.target.getAttribute('data-day-and-time');
        let inputChecked = e.target;
        let inputValue = Number(e.target.getAttribute('data-cost'));
        totalCount += inputValue;
        for(let i = 1; i < activitiesGroup.length; i++){
            let checkAttribute = activitiesGroup[i].firstElementChild.getAttribute('data-day-and-time');
            let input = activitiesGroup[i].firstElementChild;
            if(inputAttribute === checkAttribute){
                input.disabled = true;
                inputChecked.disabled = false;
            };
        };
    } else if(e.target.checked === false){

            const inputAttribute = e.target.getAttribute('data-day-and-time');
            let inputChecked = e.target;
            let inputValue = Number(e.target.getAttribute('data-cost'));
            totalCount -= inputValue;
            for(let i = 1; i < activitiesGroup.length; i++){
                let checkAttribute = activitiesGroup[i].firstElementChild.getAttribute('data-day-and-time');
                let input = activitiesGroup[i].firstElementChild;
                if(inputAttribute === checkAttribute){
                    input.disabled = false;
                    inputChecked.disabled = false;
                };
            };
        };
        

});
