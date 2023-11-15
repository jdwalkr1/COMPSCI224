document.addEventListener('DOMContentLoaded', function() {
    const seeList = document.getElementById('seeList');
    const touchList = document.getElementById('touchList');
    const hearList = document.getElementById('hearList');
    const smellList = document.getElementById('smellList');
    const tasteList = document.getElementById('tasteList');

    const senses = [
        { sense: 'see', count: 5, listElement: seeList },
        { sense: 'touch', count: 4, listElement: touchList },
        { sense: 'hear', count: 3, listElement: hearList },
        { sense: 'smell', count: 2, listElement: smellList },
        { sense: 'taste', count: 1, listElement: tasteList }
    ];

    senses.forEach(senseData => {
        for (let i = 1; i <= senseData.count; i++) {
            const listItem = document.createElement('li');
            const input = document.createElement('input');
            input.type = 'text';
            // input.placeholder = ``;
            listItem.appendChild(input);
            senseData.listElement.appendChild(listItem);
        }
    });
});
