
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