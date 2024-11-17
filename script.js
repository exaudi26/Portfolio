let currentIndex = 0;

const contents = document.querySelectorAll('.content');

// Add event listener for scrolling
window.addEventListener('wheel', (event) => {
  // Prevent default scrolling behavior
  event.preventDefault();

  // Determine scroll direction
  const direction = event.deltaY > 0 ? 1 : -1;

  // Calculate new index
  const newIndex = currentIndex + direction;

  // Check bounds
  if (newIndex >= 0 && newIndex < contents.length) {
    // Hide current content
    contents[currentIndex].classList.remove('active');

    // Show new content
    contents[newIndex].classList.add('active');

    // Update index
    currentIndex = newIndex;
  }
});


const textSequence = ["Hello...", "Welcome to...", "My Portfolio"];
const welcomeDiv = document.getElementById("welcome-text");

textSequence.push(welcomeDiv.textContent);

// Function to update the text with animation
function updateText() {
  if (currentIndex < textSequence.length) {
    // Update the text content
    welcomeDiv.textContent = textSequence[currentIndex];

    // Trigger animation by resetting and reapplying the class
    welcomeDiv.style.opacity = 0;
    setTimeout(() => {
      welcomeDiv.style.opacity = 1;
    }, 100);

    // Increment the index for the next text
    currentIndex++;

    // Schedule the next text update
    setTimeout(updateText, 2000); // 1 second delay
  }
}

// Start the sequence
updateText();