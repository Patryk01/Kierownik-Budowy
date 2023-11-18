const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item')
let showCopyright = false;
let showDescription = false;
let responsive = [];

const handleNav = () => {
    nav.classList.toggle('nav--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    handleNavItemsAnimation();
} 

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')

        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

navBtn.addEventListener('click', handleNav)





$(".gallery").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    mobileFirst: true,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }],

});


var lightbox = $(".gallery .slick-slide:not(.slick-cloned) a").simpleLightbox();
$(".gallery .slick-slide.slick-cloned a").click(function(e) {
  e.preventDefault();
  
  lightbox.open($(".gallery .slick-slide:not(.slick-cloned) a[data-id=" + $(this).data("id") + "]"));
})

document.addEventListener("DOMContentLoaded", function () {
    const emailLink = document.getElementById("emailLink");
    const email = "japm@o2.pl"; // Uzupełniony adres e-mail
    const subject = "Temat e-maila";
    const body = "Treść e-maila";

    emailLink.addEventListener("click", function (event) {
        event.preventDefault();
        const mailtoLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    });
});


