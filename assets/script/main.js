const containerHeight = document.getElementById("containerHeight");
const containerContent = document.getElementById("containerContent");
const slider = document.querySelector(".slider");
let pageHeight;
let firstOpen = 1;
let pageSliderCount = 1;

function containerHeightFunc(padding) {
    const activeSlides = slider.querySelectorAll(".slide.active");
    activeSlides.forEach(function(slide) {
        const page = slide.querySelector("section.page");
        let paddingSpace = 50;
        function makeHeight() {
            if(padding == true) {
                pageHeight = page.clientHeight + paddingSpace;
            }
            else {
                pageHeight = page.clientHeight;
            }
            slide.style.height = pageHeight + "px";
            containerHeight.style.height = pageHeight + "px";
        }
        if(firstOpen == 1) {
            makeHeight();
            firstOpen = 0;
        }
        else {
            setTimeout(() => makeHeight , 200);
        }
    });
}
containerHeightFunc(true);

const goBtn = document.querySelector(".goBtn");
const goBtnHeight = goBtn.offsetHeight + 50;

function activeGoBtnFunc() {
    const activeSlides = slider.querySelectorAll(".slide.active");
    for (const slide of activeSlides) {
        const goBtn = slide.querySelector(".goBtn");
        if (goBtn) {
            return goBtn;
        }
    }
    return null;
}

function debounce(func, delay) {
    let debounceTimer;
    return function (...args) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
}
const passwordInput = document.getElementById("password");
var passValue;
passwordInput.addEventListener("input", debounce(function() {
    if (passwordInput.value.length > 0) {
        $.ajax({
            url: './assets/php/get-pass.php',
            type: 'POST',
            data: { password: passwordInput.value },
            dataType: 'json',
            success: function(response) {
                if (response.status === 'success') {
                    passwordInput.style.pointerEvents = "none";
                    loadContent(response.content);
                    activeContainer(true);
                }
            }
        });
    } else {
        activeContainer();
    }
}, 100));


function activeContainer(status) {
    const activeGoBtn = activeGoBtnFunc();
    if (activeGoBtn) {
        if (status === true) {
            activeGoBtn.classList.add("mainBtn");
            containerHeightFunc(false);
            if(pageSliderCount == 1) {
                containerHeight.style.height = pageHeight + goBtnHeight + "px";
            }
            else {
                containerHeight.style.height = pageHeight + "px";
            }
        }
        else {
            activeGoBtn.classList.remove("mainBtn");
            containerHeightFunc(true);
            containerHeight.style.height = pageHeight + "px";
        }
    }
}

let mainContent = 0;

function loadContent(response) {
    if(mainContent === 0 && response !== "") {
        containerContent.innerHTML += response;
        loadContentScripts();
        cardFunc();
        mainContent = 1;
    }
}

let currentIndex = 0;
let pageWidth = 556 + 20;
function NextPage() {
    const slides = slider.querySelectorAll('.slide');
    const activeGoBtn = activeGoBtnFunc();
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * pageWidth}px)`;
        firstOpen = 1;
        pageSliderCount = 0;
        updateActiveClass();
    }
}
function PrevPage() {
    const slides = slider.querySelectorAll('.slide');
    const activeGoBtn = activeGoBtnFunc();
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * pageWidth}px)`;
        firstOpen = 1;
        pageSliderCount = 0;
        updateActiveClass();
    }
}

function updateActiveClass() {
    const slides = slider.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });
    if(currentIndex > 0) {
        document.title = "TrinsyCa ~ SpayAI Anlaşması";
    }
    else {
        document.title = "TrinsyVault";
    }
    containerHeightFunc(true);
}

function cardFunc() {
    let cardIndex = 1;
    let cards = document.querySelectorAll(".package");
    cards.forEach(card => {
        card.onmousemove = function(e) {
            if(currentIndex > 0) {
                cardIndex = currentIndex;
            }
            else {
                cardIndex = 1;
            }

            let x = e.pageX - card.offsetLeft / cardIndex;
            let y = e.pageY - card.offsetTop;

            card.style.setProperty("--x", x + "px");
            card.style.setProperty("--y", y + "px");
        }
    });
}
cardFunc();

function copyMail() {
    event.stopPropagation();

    var mail = "payments@trinsyca.com";

    navigator.clipboard.writeText(mail)
    .then(function() {
        talert("copyMail", mail);
    });
}

let accept_all = 0;

function DoneForm() {
    var emailInput = document.getElementById("mail");
    $.ajax({
        url: './assets/php/done-form.php',
        type: 'POST',
        data: { email: emailInput.value, accept_all: accept_all },
        dataType: 'json',
        success: function(response) {
            if (response.status === 'success') {
                mainContent = 0;
                loadContent(response.content);
                activeContainer(true);
                NextPage();
            }
        }
    });
}

//* Library Check

function checkLibraries() {
    var scripts = document.getElementsByTagName('script');
    var jQueryIncluded = false;
    var requiredScripts = [
        "/assets/script/main.js",
        "/assets/script/preload.js",
        "/assets/script/talert.js",
    ];

    var scriptsFound = requiredScripts.map(function(src) {
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src.includes(src)) {
                return true;
            }
        }
        return false;
    });

    if (scriptsFound.includes(false)) {
        talert('scripts');
        setTimeout(() => {
            location.reload();
        }, 2300);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    checkLibraries();
    setInterval(checkLibraries, 2500);
});

//* Library Check


function loadContentScripts() {
    function updateDaysRemaining() {
        var targetDate = new Date('March 15, 2025');
        var currentDate = new Date();
        var timeDifference = targetDate - currentDate;
        var daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        document.getElementById('domainDayCounter').innerText = `${daysRemaining} Gün`;
    }
    updateDaysRemaining();
    setInterval(updateDaysRemaining, 30000);

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    let changeCounter = false;

    checkboxes.forEach(function(checkbox) {
        const activeGoBtn = activeGoBtnFunc();
        checkbox.addEventListener("change", function() {
            if (Array.from(checkboxes).every(chk => chk.checked) && policyAgree === 1 && paymentAgree === 1) {
                if(containerHeight.offsetHeight < 581) {
                    pageSliderCount = 1;
                }
                activeContainer(true);
                accept_all = 1;
            }
            else {
                activeContainer();
                accept_all = 0;
            }
        });
    });

    const emailInput = document.getElementById("mail");

    emailInput.addEventListener("input", function() {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if(emailInput.value.length > 0 && emailPattern.test(emailInput.value)) {
            if(containerHeight.offsetHeight < 333) {
                pageSliderCount = 1;
            }
            activeContainer(true);
        }
        else {
            activeContainer();
        }
    });

    ibanFunc();
}

function ibanFunc() {
    const ibanBoxes = document.querySelectorAll(".ibanBox");
    let ibanCount = 0;
    ibanBoxes.forEach(function(ibanBox) {
        ibanBox.addEventListener("click", function() {
            event.stopPropagation();
            var iban = ibanBox.querySelector("#iban").innerText;
            var ibanName = ibanBox.querySelector("h3").innerText;

            navigator.clipboard.writeText(iban)
            .then(function() {
                talert("iban", ibanName);
                if(ibanCount == 0) {
                    activeGoBtn = activeGoBtnFunc();
                    activeGoBtn.classList.add("mainBtn");
                    pageSliderCount = 1;
                    activeContainer(true);
                    ibanCount = 1;
                }
            });
        });
    });
}