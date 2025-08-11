export function inilogicScript() {
    //turn pages ketika di klik next or prev button
    const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

    pageTurnBtn.forEach((el, index) => {
        el.onclick = () => {
            const pageTurnId = el.getAttribute('data-page');
            const pageTurn = document.getElementById(pageTurnId);

            if (pageTurn.classList.contains('turn')) {
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 - index;
                }, 500)
            }
            else {
                pageTurn.classList.add('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 + index;
                }, 500)
            }
        }
    })

    //contact me button jika diklik
    const pages = document.querySelectorAll('.book-page.page-right');
    const contactMeBtn = document.querySelector('.btn.contact');

    if (contactMeBtn) {
        contactMeBtn.onclick = () => {
            pages.forEach((page, index) => {
                setTimeout(() => {
                    page.classList.add('turn');
                    setTimeout(() => {
                        page.style.zIndex = 20 + index;
                    }, 500);
                }, (index + 1) * 200 + 100);
            });
        };
    }


    //create reverse index function
    let totalPages = pages.length;
    let pageNumber = 0;

    function reverseIndex() {
        totalPages = pages.length;
        pageNumber = (pageNumber - 1 + totalPages) % totalPages;
    }


    //back profile button
    const backProfileBtn = document.querySelector('.back-profile');

    backProfileBtn.onclick = () => {
        pages.forEach((_, index) => {
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].classList.remove('turn');

                setTimeout(() => {
                    reverseIndex();
                    pages[pageNumber].style.zIndex = 0 + index;
                }, 500)

            }, (index + 1) * 200 + 100)
        })
    }

    //opening animation
    const coverRight = document.querySelector('.cover.cover-right');
    const pageLeft = document.querySelector('.book-page.page-left');

    //opening animation(cover right animation)
    setTimeout(() => {
        coverRight.classList.add('turn');
    }, 2100)

    setTimeout(() => {
        coverRight.style.zIndex = -1;
    }, 2800)

    //opening animation(page left or cover animation)
    setTimeout(() => {
        pageLeft.style.zIndex = 20;
    }, 3200)

    //opening animation (all page right animation)
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 0 + index;
            }, 500)

        }, (index + 1) * 200 + 2100)
    })

    //musikkkk
    const music = document.getElementById('bg-music');
    const coverFront = document.getElementById('cover-front');
    let isPlaying = false;

    if (music && coverFront) {

        coverFront.addEventListener('click', () => {
            if (isPlaying) {
                music.pause();
            } else {
                music.play();
            }
            isPlaying = !isPlaying;
        });
    }
}