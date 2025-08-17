<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FiraolWeb | </title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <nav>
            <a href="#" class="logo">FiraolWeb</a>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <div class="hero-content">
                <h1></h1>
                <p>We design and build beautiful, modern, and responsive websites.</p>
                <a href="#contact" class="cta-button">Get in Touch</a>
            </div>
        </section>

        <section id="about">
            <h2>About Us</h2>
            <p>We are a passionate team of developers and designers dedicated to creating exceptional web experiences. Our mission is to help your business shine online with a website that is not only visually stunning but also incredibly functional.</p>
        </section>

        <section id="services">
            <h2>Our Services</h2>
            <div class="service-cards">
                <div class="card">
                    <h3>Creative Web Design</h3>
                    <p>We create beautiful and intuitive user interfaces that provide an amazing user experience.</p>
                </div>
                <div class="card">
                    <h3>Expert Development</h3>
                    <p>Our team builds robust and scalable web applications using the latest technologies.</p>
                </div>
                <div class="card">
                    <h3>Android Development</h3>
                    <p>We build high-quality Android applications that provide a seamless user experience.</p>
                </div>
            </div>
        </section>

        <section id="contact">
            <h2>Contact Us</h2>
            <form action="https://formspree.io/f/xkgzedok" method="POST">
              <label for="email-input">Your email:</label>
              <input id="email-input" type="email" name="email" required>
              
              <label for="message-input">Your message:</label>
              <textarea id="message-input" name="message" required></textarea>
              
              <button type="submit" class="cta-button">Send</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 FiraolWeb. All Rights Reserved.</p>
    </footer>

    <script src="script.js"></script>
    <script>
      // Basic page behaviors: smooth internal scrolling and form submit UI
      document.addEventListener('DOMContentLoaded', function () {
        // Smooth scroll for internal anchors
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
          anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior
            }
          });
        });

        // Simple form submit feedback
        var form = document.querySelector('form');
        if (form) {
          form.addEventListener('submit', function () {
            var btn = form.querySelector('button[type="submit"]');
            if (btn) {
              btn.disabled = true;
              btn.textContent = 'Sending...'; // Optional: change button text to indicate submission
            }
          });
        }
      });
    </script>
</body>
</html>