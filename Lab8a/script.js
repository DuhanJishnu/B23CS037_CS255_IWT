const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', function() {
    const slide = document.querySelector('.slide');
    const items = document.querySelectorAll('.item');
    slide.appendChild(items[0]);
});

prevButton.addEventListener('click', function() {
    const slide = document.querySelector('.slide');
    const items = document.querySelectorAll('.item');
    slide.prepend(items[items.length - 1]);
});
