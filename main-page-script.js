window.onload = function() {
    let toysImages = [
            'images/toys/toy-1.webp',
            'images/toys/toy-2.webp',
            'images/toys/toy-3.webp'
        ];
    let header = document.getElementById('header-animation');
    let titleText = document.getElementById('page-title-text')

    function checkTimeAndSetTheme() {
        let currentHour = new Date().getHours(); 
        
        let dayTime = currentHour >= 6 && currentHour < 21;

        let body = document.body;
        let footer = document.getElementById('footer');
        let titleContainer = document.getElementById('title-background');
        
        if (dayTime) {
            body.style.backgroundColor = 'hsl(38, 50%, 98%)';
            header.style.backgroundColor = 'hsl(0, 0%, 100%)';
            footer.style.backgroundColor = 'hsl(0, 0%, 100%)'; 
            titleContainer.style.backgroundColor = 'hsl(0, 0%, 100%, 0.8)';

        } else {
            body.style.backgroundColor = 'hsl(38, 50%, 58%)';
            header.style.backgroundColor = 'hsl(0, 0%, 60%)';
            footer.style.backgroundColor = 'hsl(0, 0%, 60%)';
            titleContainer.style.backgroundColor = 'hsl(0, 0%, 60%, 0.8)';
        }
    }
    checkTimeAndSetTheme();
    
    function createFallingToy() {
        let toy = document.createElement('img');
        toy.classList.add('falling-toy');

        let titleStyle = window.getComputedStyle(titleText);
        let fontSize = parseFloat(titleStyle.fontSize);

        toyHeight = fontSize * 2
        toy.style.height = toyHeight + 'px'

        let randomIndex = Math.floor(Math.random() * toysImages.length);
        toy.src = toysImages[randomIndex];
        toy.style.left = Math.random() * 90 + '%';
        
        let topPosition = -toyHeight; 
        toy.style.top = topPosition + 'px';
        header.appendChild(toy);

        let fallingSpeed = 1 + Math.random() * 2;
        let timerId = setInterval(function() {
            topPosition += fallingSpeed;
            toy.style.top = topPosition + 'px';
            if (topPosition > header.offsetHeight) {
                    clearInterval(timerId);
                    toy.remove();
            }
        }, 20); 
    }

    setInterval(function() {
        if (!document.hidden) {
            createFallingToy();
        }
    }, 1000);  

    authors = document.getElementsByClassName('author-card');
    Array.from(authors).forEach(author => {
        let frontPart = author.getElementsByClassName('card-front')[0];
        let backPart = author.getElementsByClassName('card-back')[0];
        
        let isAnimating = false;

        author.onmouseenter = function() {
            if (isAnimating) {
                return;
            }
            isAnimating = true;
            animateCardFlip(frontPart, backPart, function() {
                isAnimating = false;
            });
        }
        author.onmouseleave = function() {
            if (isAnimating) {
                return;
            }
            isAnimating = true;
            animateCardFlip(backPart, frontPart, function() {
                isAnimating = false;
            });
        };
    });
}

function animateCardFlip (hidePart, showPart, onAnimationComplete) {
    let widthHiddenCard = 100;
    let flipSpeed = 5;
    let timerHidePart = setInterval(function() {
        widthHiddenCard -= flipSpeed;
        hidePart.style.width = widthHiddenCard + '%';
        if (widthHiddenCard <= 0) {
            clearInterval(timerHidePart);
            hidePart.style.display = 'none';
            showPart.style.display = 'flex';
            showPart.style.width = '0%';
            let widthShowedCard = 0;
            let timerShowPart = setInterval(function() {
                widthShowedCard += flipSpeed;
                showPart.style.width = widthShowedCard + '%';
                if (widthShowedCard >= 100) {
                    clearInterval(timerShowPart);
                    showPart.style.width = '100%';
                    if (onAnimationComplete) {
                        onAnimationComplete();
                    }
                }
            }, 10);
        }
    }, 10);
}