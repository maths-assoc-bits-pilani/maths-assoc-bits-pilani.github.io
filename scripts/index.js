const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menu-toggle'); 
const closeMenu = document.getElementById('close-menu'); 

// Toggle menu open/close
const openMenu = () => {
    menu.classList.remove('w-0');
    menu.classList.add('w-1/2'); // Open menu
    closeMenu.classList.remove('rotate-45'); // Reset cross rotation
};

// Function to close menu
const closeMenuFunc = () => {
    menu.classList.add('w-0');
    menu.classList.remove('w-1/2'); // Close menu
    closeMenu.classList.add('rotate-45'); // Rotate cross button
};

// Toggle menu
menuToggle.addEventListener('click', openMenu);

// Close menu with close button
closeMenu.addEventListener('click', closeMenuFunc);

// Close menu and remove blur when clicking outside
window.addEventListener('click', (e) => {
    if (
        !menu.contains(e.target) &&
        e.target !== menuToggle &&
        e.target !== closeMenu
    ) {
        closeMenuFunc();
    }
});

const detailsForm = document.getElementById('details-form');
const responseForm = document.getElementById('response-form');

    // Handle first form submission and move to the next slide
    detailsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        if (name && email) {
            const carousel = new bootstrap.Carousel('#carouselExample');
            carousel.next(); // Move to the next slide
        }
    });

    // Handle response submission
    responseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const response = document.getElementById('response').value;

        if (response) {
            alert(`Response Submitted: ${response}`);
        }
    });

// When user submits the answer
responseForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Collect data from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const response = document.getElementById('response').value;
    const puzzleId = 1; // The puzzle ID (this can be dynamic if you have multiple puzzles)
    const isCorrect = response === '42'; // Example: Assuming the correct answer is 42
  
    // Create an object to send to the backend
    const data = { name, email, response, puzzleId, isCorrect };
  
    // Send the data to the backend
    fetch('http://localhost:3000/submit-response', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response submitted:', data);
      // Optionally, navigate to the next slide or show feedback
    })
    .catch((error) => {
      console.error('Error:', error);
    });


  fetch('http://localhost:3000/submit-response', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'correct') {
            alert('Correct answer! Your progress has been updated.');
        } else if (data.status === 'incorrect') {
            alert('Incorrect answer. Try again!');
        } else if (data.status === 'maxAttempts') {
            alert('You have reached the maximum attempts for this week.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
   

  