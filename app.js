const name = document.querySelector('input#name');
name.focus();
const otherInput = document.querySelector('#other-title');
otherInput.style.display = 'none';

/* T-SHIRT SECTION */

// HIDE SELECT THEME OPTION FROM MENU

const selectDesign = document.querySelector('#design');
selectDesign.firstElementChild.style.display = 'none';

// Until a theme is selected from the “Design” menu, no color options appear in the “Color” drop down and the “Color” field reads “Please select a T-shirt theme”.

const selectColor = document.querySelector('#color');
const selectElementOption = document.createElement('option');
selectElementOption.textContent = 'Please select a T-shirt theme';
const firstElementOption = selectColor.firstElementChild;
selectColor.insertBefore(selectElementOption, firstElementOption);
selectElementOption.selected = true;
