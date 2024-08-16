function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

window.onload = function () {
    setTimeout(showModal, 15000);
}


document.addEventListener('DOMContentLoaded', function () {
    const newButtons = document.querySelectorAll('.color-btn_new-cup');
    const cupImage = document.getElementById('cup-image');
    const newCupImage = document.getElementById('cup-color-tablet');

    newButtons.forEach(button => {
        button.addEventListener('click', function () {
            const color = this.getAttribute('data-color');
            newCupImage.src = `assets/cup_${color}.png`;
            cupImage.src = `assets/cup_${color}.png`;
        });
    });

    // newButtons.forEach(button => {
    //     button.addEventListener('click', function() {
    //         const color = this.getAttribute('data-color');
    //         cupImage.src = `assets/cup_${color}.png`;
    //     });
    // });
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

// document.addEventListener('DOMContentLoaded', function () {
//     let swiper = new Swiper('.mySwiper', {
//         slidesPerView: 1,
//         loop: true,
//         autoplay: {
//             delay: 10000,
//             disableOnInteraction: false,
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// });

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
    const [swiper, time, progress] = e.detail;
    progressCircle.style.setProperty("--progress", 1 - progress);
    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});


// First card logic
// const allSimpleImages = document.querySelectorAll('.flex-block_new-cup img');
// allSimpleImages.forEach(img => {
//     img.addEventListener('click', function () {
//         const card = img.closest('.card');
//         if (card) card.classList.add('rotate');
//     });
//
//     img.addEventListener('mouseout', function () {
//         const card = img.closest('.card');
//         if (card) card.classList.remove('rotate');
//     });
// });


const newCupImages = document.querySelectorAll('.card_new-cup p');
const backCard = document.querySelectorAll(".li-block");
newCupImages.forEach(img => {
    img.addEventListener('mousemove', function () {
        const card = img.closest('.card_new-cup');
        if (card) card.classList.add('rotate_new-cup');
    });
});
backCard.forEach(img => {
    img.addEventListener('mouseout', function () {
        const card = img.closest('.card_new-cup');
        if (card) card.classList.remove('rotate_new-cup');
    });
})

const sliderCupImages = document.querySelectorAll('.card_slider-cup p');
const sliderBackCard = document.querySelectorAll('.li-block');
sliderCupImages.forEach(img => {
    img.addEventListener('mousemove', function () {
        const card = img.closest('.card_slider-cup');
        if (card) card.classList.add('rotate_slider-cup');
    })
})
sliderBackCard.forEach(img => {
    img.addEventListener('mouseout', function () {
        const card = img.closest('.card_slider-cup');
        if (card) card.classList.remove('rotate_slider-cup');
    });
})

const newCupColorButtons = document.querySelectorAll(".color-btn_new-cup");
const newCupImage = document.getElementById("cup-color");

newCupColorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const color = button.getAttribute("data-color");
        if (newCupImage) newCupImage.src = `assets/cup_${color}.png`;
    });
});

// Second card logic
// For the new cup card
// const cardCupText = document.querySelector('.flex-block_new-cup img');
// if (cardCupText) {
//     cardCupText.addEventListener('click', function () {
//         const card = cardCupText.closest('.card_new-cup');
//         if (card) card.classList.add('rotate_new-cup');
//     });
//
//     cardCupText.addEventListener('mouseout', function () {
//         const card = cardCupText.closest('.card_new-cup');
//         if (card) card.classList.remove('rotate_new-cup');
//     });
// }
//
// // For the slider cup card
// const cardMainText = document.querySelector('.flex-block_slider-cup p');
// if (cardMainText) {
//     cardMainText.addEventListener('click', function () {
//         const card = cardMainText.closest('.card_slider-cup');
//         if (card) card.classList.add('rotate_slider-cup');
//     });
//
//     cardMainText.addEventListener('mouseout', function () {
//         const card = cardMainText.closest('.card_slider-cup');
//         if (card) card.classList.remove('rotate_slider-cup');
//     });
// }


// const sliderCupButtons = document.querySelectorAll(".slider-btn_slider-cup");
// const sliderCupImage = document.getElementById("cup-image_slider-cup");
//
// sliderCupButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         const color = button.getAttribute("data-color");
//         if (sliderCupImage) sliderCupImage.src = `assets/cup_${color}.png`;
//     });
// });

// Image slider logic
const imagesCup = [
    'assets/coffee_factory.png',
    'assets/manufactura.png',
    'assets/new_year.png',
    'assets/peron.png',
    'assets/slava_ukraine.png'
];

const imagesLid = [
    'assets/lid_black.png',
    'assets/lid_yellow.png',
    'assets/lid_red.png',
    'assets/lid_blue.png',
    'assets/lid_purple.png',
    'assets/lid_green.png',
    'assets/lid_white.png',
];

const imageHolder = [
    'assets/holder1.png',
    'assets/holder2.png',
]

const imageTissue = [
    'assets/tissue1.png',
    'assets/tissue2.png',
]

let currentCupIndex = 0;
let currentLidIndex = 0;
let currentHolderIndex = 0;
let currentTissueIndex = 0;


function showImage(index, type) {
    if (type === 'cup') {
        const imgElement = document.getElementById('cup');
        imgElement.src = imagesCup[index];
    } else if (type === 'cup-tablet') {
        const imgElement = document.getElementById('cup-tablet');
        imgElement.src = imagesCup[index];
    } else if (type === 'lid') {
        const imgLid = document.getElementById('lid');
        imgLid.src = imagesLid[index];
    } else if (type === 'lid-tablet') {
        const imgLid = document.getElementById('lid-tablet');
        imgLid.src = imagesLid[index];
    } else if (type === 'holder') {
        const imgHolder = document.getElementById('holder');
        imgHolder.src = imageHolder[index];
    } else if (type === 'holder-tablet') {
        const imgHolder = document.getElementById('holder-tablet');
        imgHolder.src = imageHolder[index];
    } else if (type === 'tissue') {
        const imgTissue = document.getElementById('tissue');
        imgTissue.src = imageTissue[index];
    } else if (type === 'tissue-tablet') {
        const imgTissue = document.getElementById('tissue-tablet');
        imgTissue.src = imageTissue[index];
    }
}

function nextImage(type) {
    if (type === 'cup') {
        currentCupIndex = (currentCupIndex + 1) % imagesCup.length;
        showImage(currentCupIndex, 'cup');
    } else if (type === 'cup-tablet') {
        currentCupIndex = (currentCupIndex + 1) % imagesCup.length;
        showImage(currentCupIndex, 'cup-tablet');
    } else if (type === 'lid') {
        currentLidIndex = (currentLidIndex + 1) % imagesLid.length;
        showImage(currentLidIndex, 'lid');
    } else if (type === 'lid-tablet') {
        currentLidIndex = (currentLidIndex + 1) % imagesLid.length;
        showImage(currentLidIndex, 'lid-tablet');
    } else if (type === 'holder') {
        currentHolderIndex = (currentHolderIndex + 1) % imageHolder.length;
        showImage(currentHolderIndex, 'holder')
    } else if (type === 'holder-tablet') {
        currentHolderIndex = (currentHolderIndex + 1) % imageHolder.length;
        showImage(currentHolderIndex, 'holder-tablet')
    } else if (type === 'tissue-tablet') {
        currentTissueIndex = (currentTissueIndex + 1) % imageTissue.length;
        showImage(currentTissueIndex, 'tissue-tablet')
    } else if (type === 'tissue') {
        currentTissueIndex = (currentTissueIndex + 1) % imageTissue.length;
        showImage(currentTissueIndex, 'tissue')
    } else if (type === 'tissue-tablet') {
        currentTissueIndex = (currentTissueIndex + 1) % imageTissue.length;
        showImage(currentTissueIndex, 'tissue-tablet')
    }
}

function prevImage(type) {
    if (type === 'cup') {
        currentCupIndex = (currentCupIndex - 1 + imagesCup.length) % imagesCup.length;
        showImage(currentCupIndex, 'cup');
    } else if (type === 'cup-tablet') {
        currentCupIndex = (currentCupIndex - 1 + imagesCup.length) % imagesCup.length;
        showImage(currentCupIndex, 'cup-tablet');
    } else if (type === 'lid') {
        currentLidIndex = (currentLidIndex - 1 + imagesLid.length) % imagesLid.length;
        showImage(currentLidIndex, 'lid');
    } else if (type === 'lid-tablet') {
        currentLidIndex = (currentLidIndex - 1 + imagesLid.length) % imagesLid.length;
        showImage(currentLidIndex, 'lid-tablet');
    } else if (type === 'holder') {
        currentHolderIndex = (currentHolderIndex - 1 + imageHolder.length) % imageHolder.length;
        showImage(currentHolderIndex, 'holder');
    } else if (type === 'holder-tablet') {
        currentHolderIndex = (currentHolderIndex - 1 + imageHolder.length) % imageHolder.length;
        showImage(currentHolderIndex, 'holder-tablet');
    } else if (type === 'tissue') {
        currentTissueIndex = (currentTissueIndex - 1 + imageTissue.length) % imageTissue.length;
        showImage(currentTissueIndex, 'tissue');
    } else if (type === 'tissue-tablet') {
        currentTissueIndex = (currentTissueIndex - 1 + imageTissue.length) % imageTissue.length;
        showImage(currentTissueIndex, 'tissue-tablet');
    }
}

function openModal(imageElement) {
    // Получаем имя изображения без расширения
    const imageName = imageElement.alt;

    // Формируем путь к новому изображению с добавлением _modal
    const modalImagePath = `assets/${imageName}_modal.png`;

    // Находим модальное окно и изображение внутри него
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("img01");

    // Устанавливаем новое изображение в модальное окно
    modalImage.src = modalImagePath;

    // Показываем модальное окно
    modal.style.display = "block";
}

function myCloseModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function toggleTilesForMobiles() {
    let tilesContainer = document.getElementById("tilesContainerForMobile");
    if (tilesContainer.classList.contains("show")) {
        tilesContainer.classList.remove("show");
    } else {
        tilesContainer.classList.add("show");
    }
}

function toggleTiles() {
    let tilesContainer = document.getElementById("tilesContainer");
    if (tilesContainer.classList.contains("show")) {
        tilesContainer.classList.remove("show");
    } else {
        tilesContainer.classList.add("show");
    }
}

function glassesToggleTiles() {
    let tilesContainer = document.getElementById("glassesTilesContainer");
    if (tilesContainer.classList.contains("show")) {
        tilesContainer.classList.remove("show");
    } else {
        tilesContainer.classList.add("show");
    }
}

function accessoriesToggleTiles() {
    let tilesContainer = document.getElementById("accessoriesTilesContainer");
    if (tilesContainer.classList.contains("show")) {
        tilesContainer.classList.remove("show");
    } else {
        tilesContainer.classList.add("show");
    }
}

document.querySelectorAll('.sidebar-card').forEach(card => {
    card.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({behavior: 'smooth'});
        }
    });
});

// Get the dialog
let dialog = document.getElementById("contactsDialog");

// Get the button that opens the dialog
let btn = document.getElementById("openDialogBtn");

// Get the <span> element that closes the dialog
let span = document.getElementsByClassName("dialog-close")[0];

// When the user clicks on the button, open the dialog
btn.onclick = function () {
    dialog.style.display = "block";
}

// When the user clicks on <span> (x), close the dialog
span.onclick = function () {
    dialog.style.display = "none";
}

// When the user clicks anywhere outside of the dialog, close it
window.onclick = function (event) {
    if (event.target === dialog) {
        dialog.style.display = "none";
    }
}


document.querySelectorAll('.card-text, .card_slider-cup').forEach(card => {
    const frontSide = card.querySelector('.front_new-cup, .front_slider-cup');
    const backSide = card.querySelector('.back_new-cup, .back_slider-cup');

    // Наведение на текст для переворота карточки
    card.addEventListener('mouseover', (e) => {
        const isTextHovered = e.target.tagName === 'P' || e.target.tagName === 'DIV';
        if (isTextHovered) {
            card.classList.add('flip');
        }
    });

    // Покидание задней части карточки для возврата к фронтовой стороне
    card.addEventListener('mouseleave', (e) => {
        card.classList.remove('flip');
    });
});

