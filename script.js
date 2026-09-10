// التبديل بين الشرائح
function nextSlide(slideNumber) {
    var slides = document.querySelectorAll('.slide');
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    var target = document.getElementById('slide' + slideNumber);
    if (target) target.classList.add('active');
}

// مطر الخنازير
function startPigRain() {
    var pigEmojis = ['🐷', '🐖', '🐽', '🐷', '🐖', '🐽'];
    var body = document.body;

    for (var i = 0; i < 50; i++) {
        (function (index) {
            setTimeout(function () {
                var pig = document.createElement('div');
                pig.classList.add('pig');
                pig.textContent = pigEmojis[Math.floor(Math.random() * pigEmojis.length)];
                pig.style.left = (Math.random() * 100) + 'vw';
                pig.style.animationDuration = (Math.random() * 3 + 2) + 's';
                pig.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
                pig.style.animationDelay = (Math.random() * 0.5) + 's';
                body.appendChild(pig);
                pig.addEventListener('animationend', function () {
                    pig.parentNode.removeChild(pig);
                });
            }, index * 100);
        })(i);
    }

    setTimeout(function () {
        nextSlide(2);
    }, 3000);
}

// فتح المظروف
function openEnvelope() {
    var envelope = document.getElementById('envelope');
    if (envelope) envelope.classList.toggle('open');
}