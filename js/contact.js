function initializeContact() {
    const container = document.querySelector('.contact-container');
    
    // Create contact info section
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    
    const infoContent = `
        <h3>Get in Touch</h3>
        <div class="info-item">
            <h4>Address</h4>
            <p>123 Business Street</p>
            <p>City, Country 12345</p>
        </div>
        <div class="info-item">
            <h4>Phone</h4>
            <p>+1 234 567 890</p>
        </div>
        <div class="info-item">
            <h4>Email</h4>
            <p>info@kits.com</p>
        </div>
        <div class="info-item">
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
        </div>
    `;
    
    contactInfo.innerHTML = infoContent;
    
    // Create contact form
    const contactForm = document.createElement('form');
    contactForm.className = 'contact-form';
    contactForm.innerHTML = `
        <h3>Send us a Message</h3>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" required>
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
    `;
    
    // Add form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            name: this.name.value,
            email: this.email.value,
            subject: this.subject.value,
            message: this.message.value
        };
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
    
    container.appendChild(contactInfo);
    container.appendChild(contactForm);
}

// Initialize mobile navigation
function initializeMobileNav() {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const navItem = this.parentElement;
            navItem.classList.toggle('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeContact();
    initializeMobileNav();
});