// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const categoryTogglers = document.querySelectorAll('.category-toggler');
    const subTogglers = document.querySelectorAll('.sub-toggler');
    const productCards = document.querySelectorAll('.product-card');

    categoryTogglers.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryTogglers.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            const subCategory = btn.dataset.sub || 'all';
            
            productCards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (category === 'all' && subCategory === 'all') {
                    card.style.display = 'block';
                } else if (cardCategory.includes(category) && 
                          (subCategory === 'all' || cardCategory.includes(subCategory))) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    subTogglers.forEach(subBtn => {
        subBtn.addEventListener('click', () => {
            const parent = subBtn.dataset.parent;
            const sub = subBtn.dataset.sub;
            const mainBtn = document.querySelector(`.category-toggler[data-category="${parent}"]`);
            
            mainBtn.click();
            categoryTogglers.forEach(btn => btn.classList.remove('active'));
            mainBtn.classList.add('active');
            
            productCards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (cardCategory === `${parent}-${sub}`) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Initialize with all products visible
    document.querySelector('.category-toggler.active').click();
});