//this is a terrible way of doing this and will cause problems later (not even talking about performance impact)

const nav = document.querySelector(`.nav-cont`);

let sticky = false;

//listen for scroll progress and change sticky if needed
document.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        sticky = true;
    } else {
        sticky = false;
    }
});

let animate = true;

//check every 1s if animation is needed and played, play the animation if needed
setInterval(() => {
    if (sticky) {
        if (animate) {
            anime({
                targets: nav,
                keyframes: [
                    {translateY: -100},
                    {translateY: 0}
                ],
                easing: 'linear',
                duration: 400,
            });
            setTimeout(() => {
                nav.style.position = `sticky`;
                nav.style.background = `#fff`;
                nav.style.boxShadow = `rgb(0 0 0 / 18%) 0px 0px 7px`;
                animate = false;
            }, 300);
        }
    } else {
        if (!animate) {
            anime({
                targets: nav,
                keyframes: [
                    {translateY: -100},
                    {translateY: 0}
                ],
                easing: 'linear',
                duration: 400,
            });
            setTimeout(() => {
                nav.style.position = ``;
                nav.style.background = ``;
                nav.style.boxShadow = ``;
                animate = true;
            }, 300);
        }
    }
}, 1000);