const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const body = document.body;
const Logo = document.getElementById('HeaderLogo');


btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const toggleButton = document.getElementById('toggleDarkMode');
    const currentMode = localStorage.getItem('mode');
    const lightLogo = document.getElementById('lightLogo');
    const darkLogo = document.getElementById('darkLogo');

    function setDarkMode() {
        html.classList.add('dark-mode');
        toggleButton.innerHTML = '<span><i class="fa fa-star-o text-xl"></i></span> <span class="text-xs font-bold">Light&nbsp;Mode</span>';
        body.style.backgroundImage = 'none';
        localStorage.setItem('mode', 'dark');
        darkLogo.classList.remove('hidden');
        lightLogo.classList.add('hidden');
    }

    function setLightMode() {
        html.classList.remove('dark-mode');
        toggleButton.innerHTML = '<span><i class="fa fa-moon-o text-xl"></i></span> <span class="text-xs font-bold">Dark&nbsp;Mode</span>';
        localStorage.setItem('mode', 'light');
        lightLogo.classList.remove('hidden');
        darkLogo.classList.add('hidden');
        body.style.backgroundImage = "url('../img/bg-tablet-pattern.PNG')";
    }

    function toggleMode() {
        if (html.classList.contains('dark-mode')) {
            setLightMode();
        } else {
            setDarkMode();
        }
    }

    if (currentMode === 'dark') {
        setDarkMode();
    } else {
        setLightMode();
    }

    if(toggleButton){
        toggleButton.addEventListener('click', toggleMode);
    }

});

document.addEventListener("DOMContentLoaded", function () {
    const testimonialContainer = document.getElementById("testiCards");
    const testimonialCards = testimonialContainer.querySelectorAll(".singCards");
    const sliderInterval = 7000;
    const numCards = testimonialCards.length;
    // const screenWidth = window.innerWidth;
    let currentIndex = 0;

    function updateSlider() {
        console.log(window.innerWidth);
        const cardsPerSlide = window.innerWidth >= 768 ? 3 : 1;

        testimonialCards.forEach((card) => {
            card.style.display = "none";
        });


        for (let i = 0; i < cardsPerSlide; i++) {
            const cardIndex = (currentIndex + i) % numCards;
            const card = testimonialCards[cardIndex];
            card.style.display = "flex";
        }

        currentIndex = (currentIndex + cardsPerSlide) % numCards;
    }

    updateSlider();

    window.addEventListener("resize" , updateSlider);

    setInterval(updateSlider, sliderInterval);
});
