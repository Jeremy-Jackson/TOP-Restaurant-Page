import _ from 'lodash';
import { contactPage } from './contact.js';
import { menuPage } from './menu.js';
import James from '/Users/jeremyjackson/VS Code Workspace/the_odin_project/restaurant2/src/James.jpeg';

export function homePage() {
    const container = document.getElementById('content-container');
    const brandLogo = document.getElementById('brandLogo');
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const contactBtn = document.getElementById('contactBtn');

    // Load home page on click
    const james = new Image();
    james.src = James;
    container.appendChild(james);
    james.style.paddingRight = '5px';

    const blurb = document.createElement('p');

    blurb.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laudantium, praesentium, at voluptatum voluptatibus cum quos molestias dolore est dolorem quasi quas unde officia provident dolorum totam, doloribus itaque numquam voluptate! Ullam voluptatibus aliquid sint vero, vitae hic accusantium similique totam nemo ab neque officia odio aperiam fugit! Tenetur, rerum!';

    container.appendChild(blurb);
    blurb.style.paddingLeft = '5px';

    // const newContainer = document.createElement('div');
    // document.body.appendChild(newContainer);
    // newContainer.classList.add('container');
    // newContainer.id = 'bottom-container'
    // const headline = document.createElement('h1');
    // headline.innerHTML = 'Come on down to my shed!';
    // // headline.classList.add = 'text-wrap';
    // newContainer.appendChild(headline);

    menuBtn.addEventListener('click', function (e) {
        // Clear container on click
        container.innerHTML = '';
        // Load menu page on click
        menuPage();
    });

    contactBtn.addEventListener('click', function (e) {
        // Clear container on click
        container.innerHTML = '';
        // newContainer.remove();
        // Load contact page on click
        contactPage();
    });

    brandLogo.addEventListener('click', function (e) {
        // Clear container on click
        container.innerHTML = '';
        // newContainer.remove();

        homePage();
    });

    homeBtn.addEventListener('click', function (e) {
        // Clear container on click
        container.innerHTML = '';
        // newContainer.remove();
        
        homePage();
    });
}