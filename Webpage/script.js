const mainBuyBtn = document.querySelector('.pricing .btn-primary');
const modal = document.getElementById('purchaseModal');
const closeModalBtn = document.getElementById('closeModal');
const form = document.getElementById('purchaseForm');

mainBuyBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const userName = document.getElementById('name').value;
    alert(`Purchase successful!\nThank you ${userName}, your Nova Pods 5 are on the way!`);
    modal.classList.remove('active');
    form.reset();
});