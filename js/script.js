function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

window.onload = function() {
    setTimeout(showModal, 15000);
}


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.color-btn');
    const cupImage = document.getElementById('cup-image');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            cupImage.src = `assets/cup_${color}.png`;
        });
    });
});

function expandButton(button) {
    const allButtons = document.querySelectorAll('.button-item');
    allButtons.forEach(btn => {
        if (btn !== button) {
            btn.classList.remove('expanded');
        }
    });
    button.classList.toggle('expanded');
}
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
    const [swiper, time, progress] = e.detail;
    progressCircle.style.setProperty("--progress", 1 - progress);
    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});