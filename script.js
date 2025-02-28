document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

   
    const slidesContainer = document.querySelector('.slides');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slideCount = slidesContainer.children.length;
    let currentIndex = 0;

    function updateSlider(index) {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider(currentIndex);
    }

   
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateSlider(currentIndex);
        });
    });

  
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    
    setInterval(nextSlide, 15000);

  
    const categoryTogglers = document.querySelectorAll('.category-toggler');
    const subCategoryLists = document.querySelectorAll('.sub-category-list');

    categoryTogglers.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryTogglers.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;

            subCategoryLists.forEach(list => {
                list.classList.remove('active');
                if (list.classList.contains(category)) {
                    list.classList.add('active');
                }
            });
        });
    });

    document.querySelector('.category-toggler.active').click();
});