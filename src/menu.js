import _ from 'lodash';
import { contactPage } from './contact.js';
import { homePage } from './homePage.js';
import Menu from '/Users/jeremyjackson/VS Code Workspace/the_odin_project/restaurant2/src/Menu.jpeg';


export function menuPage() {
    const container = document.getElementById('content-container');
    // const newContainer = document.getElementById('bottom-container');
    const brandLogo = document.getElementById('brandLogo');
    const homeBtn = document.getElementById('homeBtn');
    // const menuBtn = document.getElementById('menuBtn');
    const contactBtn = document.getElementById('contactBtn');




    contactBtn.addEventListener('click', function (e) {
        // Clear container on click
        container.innerHTML = '';

        // Load contact page on click
        contactPage();
    });

    brandLogo.addEventListener('click', function (e) {
        // Clear container on click
        container.innerHTML = '';

        // Load home page on click
        homePage();
    });

    homeBtn.addEventListener('click', function (e) {
        // Clear container on click
        container.innerHTML = '';

        // Load home page on click
        homePage();
    });

    // const head = document.createElement('h1');
    // head.innerHTML = 'Appetizers';
    // container.appendChild(head);


    const menu = new Image();
    menu.src = Menu;
    container.appendChild(menu);
    menu.id = 'menu-img';

}