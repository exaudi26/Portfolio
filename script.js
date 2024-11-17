const wrapper = document.querySelector('.wrapper');
const items = Array.from(wrapper.children);

// Create a scrollable container
const scrollContainer = document.createElement('div');
scrollContainer.classList.add('scroll-container');

// Append items to the scrollable container twice for looping
items.forEach(item => scrollContainer.appendChild(item.cloneNode(true)));
items.forEach(item => scrollContainer.appendChild(item.cloneNode(true)));

// Append the scrollable container back to the wrapper
wrapper.innerHTML = '';
wrapper.appendChild(scrollContainer);

// Dynamically adjust the width of the scroll-container
const itemWidth = 100; // Match your CSS item width
const gap = 30; // Match your CSS gap
const totalWidth = (itemWidth + gap) * items.length * 2; // Double for looping
scrollContainer.style.width = `${totalWidth}px`;
