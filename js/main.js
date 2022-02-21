(function() {
    const picture = [
        'img-01',
        'img-02',
        'img-03',
        'img-04',
        'img-05'
    ];
    const btn = document.querySelectorAll('.btn');
    const sliderDiv = document.querySelector('.image-holder');
    let counter = 0;
    btn.forEach(function(button) {
        button.addEventListener('click', function() {
            if (button.classList.contains("btn-left")) {
                counter--;
                if (counter < 0) {
                    counter = picture.length - 1;
                }
                sliderDiv.style.backgroundImage = `url('./img/${picture[counter]}.jpg')`;
            }
            if (button.classList.contains('btn-right')) {
                counter++;
                if (counter > picture.length - 1) {
                    counter = 0;
                }
                sliderDiv.style.backgroundImage = `url('./img/${picture[counter]}.jpg')`;
            }
        })
    })
})();