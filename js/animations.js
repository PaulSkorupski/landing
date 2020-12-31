let heading1Done = false;
let cards1Done = false;
let skillsDone = false;
let projectsDone = false;

document.addEventListener('scroll', () => {
    if (window.scrollY >= 600 && heading1Done === false) {
        anime({
            targets: '.anime-heading-1',
            translateY: 0,
            opacity: 1,
            easing: 'linear',
            duration: 300
        });
        heading1Done = true;
    } 

    if (window.scrollY >= 800 && cards1Done === false) {
        anime({
            targets: `.anime-card-1`,
            translateY: 0,
            opacity: 1,
            easing: 'linear',
            duration: 300,
        });
        anime({
            delay: 250,
            targets: `.anime-card-2`,
            translateY: 0,
            opacity: 1,
            easing: 'linear',
            duration: 300,
        });
        anime({
            delay: 500,
            targets: `.anime-card-3`,
            translateY: 0,
            opacity: 1,
            easing: 'linear',
            duration: 300,
        });
        cards1Done = true;
    } 

    if (window.scrollY >= 1500 && skillsDone === false) {
        anime({
            targets: `.anime-skills`,
            opacity: 1,
            easing: 'linear',
            duration: 400,
        });
        skillsDone = true;
    }

    if (window.scrollY >= 2100 && projectsDone === false) {
        anime({
            targets: `.anime-projects`,
            opacity: 1,
            easing: 'linear',
            duration: 200,
        });
        projectsDone = true;
    }
});