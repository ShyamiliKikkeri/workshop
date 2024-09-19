// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Handle form submission
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Simulate form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent successfully.`);
    } else {
      alert('Please fill out all fields before submitting.');
    }

    // Clear form fields after submission
    contactForm.reset();
  });
});
