const weightButtons = document.querySelectorAll('.weight-btn');
const skuSpan = document.querySelector('.SKU span');
const oldPriceSpan = document.querySelector('.basket .old-price');
const newPriceSpan = document.querySelector('.basket .new-price');

function selectWeight(btn) {
    weightButtons.forEach(b => {
        b.classList.remove('active');
        b.classList.add('non-active');
    });
    
    btn.classList.remove('non-active');
    btn.classList.add('active');

    skuSpan.textContent = btn.dataset.sku;
    oldPriceSpan.textContent = `${btn.dataset.oldPrice} ₽`;
    newPriceSpan.textContent = `${btn.dataset.price} ₽`;
}

weightButtons.forEach(btn => {
    btn.addEventListener('click', () => selectWeight(btn));
});