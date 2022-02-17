import Spagett from '/Users/jeremyjackson/VS Code Workspace/the_odin_project/restaurant2/src/spagett.jpeg';
import { homePage } from './homePage.js';

export function contactPage() {
    const container = document.getElementById('content-container');
    const contactList = document.createElement('ul');
    contactList.id = 'contact-list';
    container.appendChild(contactList);
    const shedPhone = document.createElement('li');
    contactList.appendChild(shedPhone);
    shedPhone.innerHTML = 'Telephone: (603) 420-6969';
    const shedEmail = document.createElement('li');
    contactList.appendChild(shedEmail);
    shedEmail.innerHTML = 'Email: comeOnDownToMyShed@Spaghetti.com';
}