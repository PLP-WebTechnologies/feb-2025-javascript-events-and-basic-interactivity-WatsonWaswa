// Image Gallery - Change Car Images
const carImages = [
   "assets/gta-6-3840x2160-fan-art-muscle-car-4k-24969.jpeg", // Car 1
  "assets/lamborghini-5120x2880-concept-25428.jpeg", // Car 2
  "assets/porsche-mission-r-5120x2880-munich-motor-show-2021-electric-cars-23646.jpeg"  // Car 3
  ];
  let currentCarIndex = 0;
  
  document.getElementById("nextCarButton").addEventListener("click", function() {
    currentCarIndex = (currentCarIndex + 1) % carImages.length;
    document.getElementById("carImage").src = carImages[currentCarIndex];
  });
  
  // Accordion-style Car Models
  const accordionButtons = document.querySelectorAll(".accordionButton");
  
  accordionButtons.forEach(button => {
    button.addEventListener("click", function() {
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
  
  // Form Validation
  document.getElementById("inquiryForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (!name || !email || !message) {
      alert("All fields must be filled out!");
      return;
    }
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }
  
    alert("Thank you for your inquiry! We'll get back to you soon.");
  });
  