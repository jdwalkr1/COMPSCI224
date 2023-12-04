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
            listItem.appendChild(input);
            senseData.listElement.appendChild(listItem);

            // Add event listener for 'keyup' on the input field
            input.addEventListener('keyup', function(event) {
                // Check if the pressed key is 'Enter'
                if (event.key === 'Enter') {
                    // Call a function to handle the Enter key press
                    handleEnterKeyPress(input, senseData.listElement);
                }
            });
        }
    });

    // Function to handle Enter key press
    function handleEnterKeyPress(currentInput, currentList) {
        // Find all inputs within the same list
        const inputs = currentList.querySelectorAll('input');
        
        // Find the index of the current input in the list
        const currentIndex = Array.from(inputs).indexOf(currentInput);

        // If there's a next input, focus on it
        if (currentIndex < inputs.length - 1) {
            const nextInput = inputs[currentIndex + 1];
            nextInput.focus();
        }
    }

    // Add event listener to the existing button for page reload
    const existingButton = document.getElementById('myButton');

    if (existingButton) {
        existingButton.addEventListener('click', function() {
            // Reload the page when the existing button is clicked
            location.reload();
        });
    }
});
