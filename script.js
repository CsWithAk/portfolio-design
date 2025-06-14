/*======Print page Button Function!=======*/

function printpage(){
    window.print();
}
  
  /*=============Resume link!================*/
document.getElementById('resume-btn').addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/1o2WNwtHcM6Ywjcw2uaLDXSFrfXykEqas/view?usp=drivesdk', '_blank');
});
  
  
  /*======Download CV Button Function!=======*/
  
document.getElementById('download-btn').addEventListener('click', function() {
    window.location.href = 'ak cv/cv.html';//'/resume/Ak resume.pdf'; // Replace with the actual path to your CV file
});
  
  
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
  
    timelineItems.forEach(item => {
        item.classList.add('animated');
    });
});
  
  /*========Project Card Function!=========*/
  
function toggleDescription(card) {
    const description = card.querySelector('.description');
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
}
  
  
  /*========Contact form Function!=========*/
  
  
/*  
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("jFLEDGn_skCFjSsIR");
      // Replace with your EmailJS user ID
  
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        emailjs.sendForm('service_lticl16', 'template_0ad4jqz', form) 
          //Replace with your Emailjs service id and template id 
            .then(function(response) {
                document.getElementById('responseMessage').textContent = 'Message sent successfully!';
                alert('Thank you for reaching out! We will get back to you soon.'); //this message is displayed after clicking the submit button 
                form.reset();
            }, function(error) {
                document.getElementById('responseMessage').textContent = 'Error sending message. Please try again.';
            });
    });
});
*/
document.addEventListener('DOMContentLoaded', function() {
  emailjs.init("U7IKzFW6OcToLhli1"); 
 // Replace with your EmailJS user ID

  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_df3xcvu', 'template_fyfoc7d', form) //Replace with your EmailJS Service id and template id 
          .then(function(response) {
              document.getElementById('responseMessage').textContent = 'Message sent successfully!';
              alert('Thank you for reaching out! We will get back to you soon.');
              form.reset();
          }, function(error) {
              document.getElementById('responseMessage').textContent = 'Error sending message. Please try again.';
          });
  });
});


  
  
  
  /*========to-Top-btn Function!=========*/
  
document.addEventListener('DOMContentLoaded', function() {
    const toTopBtn = document.getElementById('toTopBtn');
  
      // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 2000) { // Adjust the value as needed
            toTopBtn.style.display = 'block';
        } else {
            toTopBtn.style.display = 'none';
        }
    
    });
  
      // Scroll to top when button is clicked
    toTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
  
  /*============Multiple text===============*/
  
    // Typed.js Animation
if (document.querySelector('.multiple-text')) {
    new Typed(".multiple-text", {
        strings: ["Amit Kumar", "Web Developer", "Frontend Developer"],
        typeSpeed: 400,
        backSpeed: 300,
        backDelay: 1000,
        loop: true
    });
}