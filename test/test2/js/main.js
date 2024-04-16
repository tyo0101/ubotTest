import * as checkAccount from './checkAccount.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('NumberForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputContent = document.getElementById('NumberInput').value;
        const checksum = checkAccount.validateAccount(inputContent);
        console.log(checksum)
    });
});