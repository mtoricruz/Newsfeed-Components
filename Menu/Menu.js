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

  

  

  

  

 
  
*/

function menuCreator(menuData){
  // instantiate elements
  const menuDiv = document.createElement('div');
  const menuList = document.createElement('ul');

  // add classes to elements
  menuDiv.classList.add('menu');

  // structure elements
  menuDiv.appendChild(menuList);

  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

    menuData.forEach(item => {
      const newListItem = document.createElement('li');
      newListItem.textContent = item;
      menuList.appendChild(newListItem);
  });

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  
  const menuButton = document.querySelector('.menu-button')

  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  menuButton.addEventListener('click', event => {
    menuDiv.classList.toggle('menu--open')
  })

  // Step 5: return the menu component.
  return menuDiv
}

// Step 6: add the menu component to the DOM.
const header = document.querySelector('.header')

header.appendChild(menuCreator(menuItems))

