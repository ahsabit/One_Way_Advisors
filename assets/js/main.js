// ------------------nav buttons------------------
var homeBtn = document.querySelector('.home-li');
var aboutBtn = document.querySelector('.about-li');
var approachBtn = document.querySelector('.approach-li');
var reasonBtn = document.querySelector('.reason-li');
var contactBtn = document.querySelector('.contact-li');
var allBtn = document.querySelectorAll('.nav li');

aboutBtn.addEventListener('mouseover', function(){
    acivate(aboutBtn, allBtn);
});

aboutBtn.addEventListener('mouseout', function(){
    deactivate(aboutBtn, homeBtn);
});

approachBtn.addEventListener('mouseover', function(){
    acivate(approachBtn, allBtn);
});

approachBtn.addEventListener('mouseout', function(){
    deactivate(approachBtn, homeBtn);
});

reasonBtn.addEventListener('mouseover', function(){
    acivate(reasonBtn, allBtn);
});

reasonBtn.addEventListener('mouseout', function(){
    deactivate(reasonBtn, homeBtn);
});

contactBtn.addEventListener('mouseover', function(){
    acivate(contactBtn, allBtn);
});

contactBtn.addEventListener('mouseout', function(){
    deactivate(contactBtn, homeBtn);
});

function acivate(btn, all) {
    let u = btn.querySelector('.underline');
    all.forEach(b => {
        let eu = b.querySelector('.underline');
        if (eu.classList.contains('active')) {
            eu.classList.remove('active');
        }
    });
    if (!u.classList.contains('active')) {
        u.classList.add('active');
    }
}

function deactivate(btn, hm){
    let u = btn.querySelector('.underline');
    let h = hm.querySelector('.underline');
    if (u.classList.contains('active')) {
        u.classList.remove('active');
    }
    if (!h.classList.contains('active')) {
        h.classList.add('active');
    }
}

// -------------------why one way points-------------------
var points = document.querySelectorAll('.oneway-point');

points.forEach(p => {
    p.addEventListener('click', function(){
        togglePoint(p);
    });
});

function togglePoint(point){
    if (!point.classList.contains('hidden-point')) {
        point.classList.add('hidden-point');
    }else{
        point.classList.remove('hidden-point');
    }
}

// ------------------slider--------------------------
var slide = document.querySelector('.slide');

let i = 0;
let winWidth = window.innerWidth;
setInterval(() => {
    slide.style.transform = "translate("+i+"%, 0)";
    if (winWidth  <= 850) {
        if (winWidth  <= 705) {
            i = i - 100;
            if (i < -400) {
                i = 0;
            }
        }else{
            i = i - 50;
            if (i < -150) {
                i = 0;
            }
        }
    } else {
        i = i - 33.4;
        if (i < -66.8) {
            i = 0;
        }
    }
}, 5000);

// ----------------------responsive nav------------------
var rightWrapper = document.querySelector('.right-wrapper');
var toggleBtn = document.querySelector('.toggle-btn');
var bars = toggleBtn.querySelector('.fa-bars');
var xmark = toggleBtn.querySelector('.fa-xmark');

toggleBtn.addEventListener('click', function(){
    toggleMenu(bars, xmark, rightWrapper);
});

function toggleMenu(atn, ctn, wrapper){
    if (atn.classList.contains('toggle-hidden')) {
        wrapper.classList.remove('toggle-display');
        atn.classList.remove('toggle-hidden');
        ctn.classList.add('toggle-hidden');
    }else{
        wrapper.classList.add('toggle-display');
        atn.classList.add('toggle-hidden');
        ctn.classList.remove('toggle-hidden');
    }
}

// ----------------automatic date update--------------
var yearHtml = document.querySelector('.year');

var date = new Date();
var year = date.getFullYear();
yearHtml.innerText = year;