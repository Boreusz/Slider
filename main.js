const slider = (() => {
    let counter = 0;
    const slide = (object, number = counter) => {
        object.style.transform = 'translateX(-'+ (300 * number) + 'px)';
        window.clearInterval(timer);
        timer = setInterval(foo, 5000)
    }
    const nextSlide = (object) => {
        counter++;
        if(counter > 2){
            counter = 0;
        }
        slide(object);
        dotsReset(counter);
    }
    const previousSlide = (object) => {
        counter--;
        if(counter < 0){
            counter = 2;
        }
        slide(object);
        dotsReset(counter);
    }
    const chooseSlide = (object, slideID) => {
        counter = slideID;
        object.style.transform = 'translateX(-'+ (300 * parseInt(slideID)) + 'px)';
        slide(object, slideID);
        dotsReset(slideID);
    }
    const dotsReset = (id) => {
        for( let i = 0; i < 3; i++){
            if (i == id) {
                document.getElementById(i).style.background = 'rgb(77, 77, 77)';
            } else {
                document.getElementById(i).style.background = 'white';
            }
        }
    }
    return {
        nextSlide,
        previousSlide,
        chooseSlide
    }
})();

const nextBttn = document.querySelector('.next-bttn');
const previousBttn = document.querySelector('.previous-bttn');
const images = document.querySelector('.images');
const imagenav = document.querySelectorAll('.dot');
document.getElementById('0').style.background = 'rgb(77, 77, 77)';

nextBttn.addEventListener('click', () => {
    slider.nextSlide(images);
});
previousBttn.addEventListener('click', () => {
    slider.previousSlide(images);
});
imagenav.forEach((dot) => {
    dot.addEventListener('click', () => {
        slider.chooseSlide(images, dot.getAttribute('id'))
    });
});
function foo () {
    slider.nextSlide(images)
}
let timer = setInterval(foo, 5000);