document.addEventListener("DOMContentLoaded", function() {
    // Array to store navigation data [page, link]
    const pages = [
        ['Home', 'index.html'],
        ['About Us', 'aboutus.html'],
        ['Contact Us', 'contactus.html'],
        ['Merch', 'shopping.html']
    ];
    //array to store images to use within the nav/footer
    const images =[
        'images/retro-gaming.jpeg', 'images/controllers.jpg'
    ];
    //random image selector to swap images randomly upon page load.
    const randomImages = images[Math.floor(Math.random() * images.length)];

    // Function to generate navigation
    function generateNavigation(currentPage) {
        let navHTML = `
            <a class="logo-nav" href ="index.html">
                <img src="${randomImages}" alt="Logo" class="logo">
                <p>King of Strings</p>
            </a>    
            `; 
            navHTML += '<ul class ="Nav-item">';
            pages.forEach(page => {
                if (page[1] === currentPage) {
                    navHTML += `<li><strong>${page[0]}</strong></li>`;
                } else {
                    navHTML += `<li><a class ="hover-target" href="${page[1]}">${page[0]}</a></li>`;
                }
            });
            navHTML += '</ul>';
        document.getElementById('navigation').innerHTML = navHTML;
    }
    function generateFooter(){
        let footerHTML = `
        <!-- Social Media Links Card -->
        <div class="footer-card">
            <h3>Follow Us</h3>
            <div class="social-links">
                <a href="#" class="social-link facebook"> <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="Facebook" class="social-icon"></a>
                <a href="#" class="social-link twitter"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" class="social-icon"></a>
                <a href="#" class="social-link instagram"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" class="social-icon"></a>
            </div>
        </div>
        `;
        document.getElementById('footer').innerHTML = footerHTML;
    }
    //creating a custom cursor
    /*references: https://www.freecodecamp.org/news/how-to-make-a-custom-mouse-cursor-with-css-and-javascript/
                https://codepen.io/ntenebruso/pen/QWLzVjY
    video references:
    https://www.youtube.com/watch?v=rfpRZ2t_BrQ
    */
    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.custom-cursor');
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    let cursorX = 0, cursorY = 0;
    let mouseX = 0, mouseY = 0;
    const speed = 0.1; 

    function animateCursor() {
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;

        cursor.style.transform = `translate(-50%, -50%) translate(${cursorX}px, ${cursorY}px)`;

        requestAnimationFrame(animateCursor);
    }
    const textElements = document.querySelectorAll('.hover-target');
    textElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursor.classList.add('hovered');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
        });
    });

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
 
    // Call the functions on each page load
        generateNavigation(window.location.pathname.split("/").pop());
        generateFooter();
        animateCursor();
});