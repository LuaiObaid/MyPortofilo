/*==================== toggle icon navbar ====================*/
/*window.onload = function(){
    const downloadButton = document.getElementById("download");
    downloadButton.addEventListener("click", () => {
        // Select the parent container or specific elements within it to convert to PDF
        const pdfContainer = document.getElementById("pdf");
        // Use html2pdf to convert the selected elements to PDF and save
        html2pdf().from(pdfContainer).save();
    });
}*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
    

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
    

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};


/*==================== scroll reveal ====================*/
ScrollReveal({ 
   // reset: true,
    distance:'8+px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/



/*function foundPalindromeLength(names) {
    var maxLength = 0;
    var wordIndex = -1;

    for (var i = 0; i < names.length; i++) {
        var word = names[i].toLowerCase().replace(/ /g, ""); // Use replace to remove spaces
        var isPalindrome = true;

        for (var j = 0, k = word.length - 1; j < k; j++, k--) {
            if (word[j] !== word[k]) {
                isPalindrome = false;
                break; // No need to check further if it's not a palindrome
            }
        }

        if (isPalindrome) {
            if (maxLength < word.length) {
                maxLength = word.length;
                wordIndex = i;
            }
        }
    }

    return wordIndex !== -1 ? names[wordIndex] : -1;
}

var names = ["luai", "1234554321", "was it a cat i saw", "Level"];
console.log(foundPalindromeLength(names));
var str3 = "lllllldds";
var len3 = str3.length;
// Initialize an array of length 26 with all elements set to 0
const seen2 = Array(26).fill(0);
 // Array to store occurrences of lowercase letters

// Count occurrences of each character
for (var i = 0; i < len3; i++) {
    seen2[str3[i].charCodeAt(0) - 'a'.charCodeAt(0)]++; // Convert character to index of array
    
}

// Print the count for each repeated character
for (var i = 0; i < 26; i++) {
    if (seen2[i] > 1) {
        console.log(String.fromCharCode(i + 'a'.charCodeAt(0)) + seen2[i]); // Convert index back to character
    }
}
*/