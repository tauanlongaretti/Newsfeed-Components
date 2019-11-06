/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const createMenu = menuItems => {
const menu = document.createElement('div');
const list = document.createElement('ul');
const firstItem = document.createElement('li');
const secondItem = document.createElement('li');
const thirdItem = document.createElement('li');
const fourthItem = document.createElement('li');
const fifthItem = document.createElement('li');
const sixthItem = document.createElement('li');

menu.appendChild(list);
list.appendChild(firstItem);
list.appendChild(secondItem);
list.appendChild(thirdItem);
list.appendChild(fourthItem);
list.appendChild(fifthItem);
list.appendChild(sixthItem);

// Add class
menu.classList.add('menu');

// Add content
firstItem.textContent = menuItems[0];
secondItem.textContent = menuItems[1];
thirdItem.textContent = menuItems[2];
fourthItem.textContent = menuItems[3];
fifthItem.textContent = menuItems[4];
sixthItem.textContent = menuItems[5];

// Functionality
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
  const menuDiv = document.querySelector('.menu')
  menuDiv.classList.toggle('menu--open');
});

return menu;
}

const parentComponentTwo = document.querySelector('.header');
parentComponentTwo.appendChild(createMenu(menuItems));

