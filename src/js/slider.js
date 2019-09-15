let slides = document.querySelectorAll('.slider .slide');
console.log(slides);
console.log(slides.length);

document.querySelectorAll('.slider .btn').forEach(item => {
    item.addEventListener('click',  function (e) {

        let index = Array.from(slides).findIndex(function (item, i, mass) {
            return item.className.includes('show');
        });

        if(this.className.includes('btn-next')){
            if(index === slides.length - 1) {
                slides[index].classList.remove('show');
                slides[0].classList.add('show');
            }else {
                slides[index].classList.remove('show');
                slides[index + 1].classList.add('show');
            }
        }else {
            if(index === 0) {
                slides[index].classList.remove('show');
                slides[slides.length - 1].classList.add('show');
            }else {
                slides[index].classList.remove('show');
                slides[index - 1].classList.add('show');
            }
        }
    })
});

let slider = new Slider( {
    images: '.slider .slides',
    btnNext: '.slider .btn-next',
    btnPrev: '.slider .btn-prev',
    auto: 'true'
});