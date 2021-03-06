document.getElementById('container').onscroll = function () {
    myFunction();
    showScrollTop();
};

function myFunction() {
    const currentScrollElement = document.querySelector('#container')
    const winScroll = currentScrollElement.scrollTop
    const height = currentScrollElement.scrollHeight - currentScrollElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-bar").style.width = scrolled + "%";
}

showScrollTop = () => {
    let elementID = 'about-me'
    const currentScrollPosition = document.querySelector('#container').scrollTop;
    const selectElement = document.getElementById(elementID)
    const elementOffsetTop = selectElement.offsetTop

    if (currentScrollPosition > elementOffsetTop) {
        selectElement.style.display = 'block'
        selectElement.classList.add('animate__fadeInUp')
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-5XH9HL1N8D');

const app = document.getElementById('sub-header');

const date = new Date()
const getYear = new Date().getFullYear()
const firstJob = new Date('12-12-2018').getFullYear()

document.getElementById('year').innerHTML = getYear - firstJob

function readMore(id) {
    var dots = document.getElementById(`dots-${id}`);
    var moreText = document.getElementById(`more-${id}`);
    var readButton = document.getElementById(`read-${id}`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        readButton.innerHTML = "read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        readButton.innerHTML = "read less";
        moreText.style.display = "inline";
    }
}

function goTo(url) {
    window.open(url)
}

function previewProduct() {
    const id = document.getElementById('detail-card')
    id.style.display = "inline-flex"
    id.classList.add('animate__fadeInUp')
}

const idForm = document.getElementById('sendMessage')
idForm.addEventListener('submit', e => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const text = document.getElementById('text').value

    fetch('http://api.deanufriana.xyz/sendEmail', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, text })
    })
        .then((res) => res.json())
        .then(data => alert('Your message has been sent'))
        .catch(err => alert(JSON.stringify(err)))

})