const svgPath = document.querySelectorAll('.path');

const svgText = anime({
    targets: svgPath,
    loop: true,
    direction: 'alternate',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 350,
    delay: (el, i) => { return i * 250 }
});

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}