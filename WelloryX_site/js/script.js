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




var typed = new Typed('.typewriter', {
  strings: [
      "launch your private practice  ", 
      "conduct 1-on-1 or group coaching sessions  ",
      "attract and retain a wider range of coaching clients", 
      "access exclusive brand partnerships",
      "land a full-time coaching role at a top nutrition company ", 
      "consult at gyms and exercise studios  ",
      "lead corporate wellness at health-conscious companies ", 
      "work as a nutrition coach in a clinical setting ",
      "get paid to write articles, blog posts, and recipes ", 
      "land a government or health advocacy role",
      "consult restaurants, food stores, and food products ", 
      "advise on nutrition for schools and colleges",
      "elevate your resume to land a career with any health-focused brand  ", 
      "lead virtual or in-person workshops",
      "present at nutrition-focused events & webinars", 
  ],
  typeSpeed: 30,
  backDelay: 2000,
  backSpeed: 30,
  showCursor: false,
});
