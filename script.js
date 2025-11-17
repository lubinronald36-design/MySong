const s1 = new Audio('s1.wav');
const s2 = new Audio('s2.wav');
const s3 = new Audio('s3.wav');

const animation = document.querySelector('.animation');

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'c':
            s1.play();
            animation.classList.add('c-animation');
            setTimeout(() => {
                animation.classList.remove('c-animation');
            }, 500);
            break;
        case 'g':
            s2.play();
            animation.classList.add('g-animation');
            setTimeout(() => {
                animation.classList.remove('g-animation');
            }, 500);
            break;
        case 'd':
            s3.play();
            animation.classList.add('d-animation');
            setTimeout(() => {
                animation.classList.remove('d-animation');
            }, 500);
            break;
        default:
            break;
    }
});
