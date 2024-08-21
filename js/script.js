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


const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
    const [swiper, time, progress] = e.detail;
    progressCircle.style.setProperty("--progress", 1 - progress);
    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});



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
    const imageName = imageElement.alt;
    const modalImagePath = `assets/${imageName}_modal.png`;


    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("img01");


    modalImage.src = modalImagePath;
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


let dialog = document.getElementById("contactsDialog");
let btn = document.getElementById("openDialogBtn");
let span = document.getElementsByClassName("dialog-close")[0];


btn.onclick = function () {
    dialog.style.display = "block";
}


span.onclick = function () {
    dialog.style.display = "none";
}


window.onclick = function (event) {
    if (event.target === dialog) {
        dialog.style.display = "none";
    }
}



document.addEventListener('touchstart', function() {
    const rotatedCards = document.querySelectorAll('.rotate_slider-cup, .rotate_new-cup');
    rotatedCards.forEach(card => {
        if (card.classList.contains('rotate_slider-cup')) {
            card.classList.remove('rotate_slider-cup');
        }
        if (card.classList.contains('rotate_new-cup')) {
            card.classList.remove('rotate_new-cup');
        }
    });
});
