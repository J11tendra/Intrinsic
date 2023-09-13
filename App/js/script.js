const btnHam = document.querySelector(".hamburger_btn");
const body = document.querySelector("body");
const menu = document.querySelector("#menuhamburger");

btnHam.addEventListener("click", function() {;
    if (btnHam.classList.contains("open__toggle")) {;
        btnHam.classList.remove('open__toggle');
        body.classList.remove("no-scroll");
        menu.classList.remove("slide-in");
        menu.classList.add("slide-out");
        menu.classList.add("none");
        console.log("menu closed.");
    }
    else {;
        btnHam.classList.add("open__toggle");
        body.classList.add("no-scroll");
        menu.classList.remove("none");
        menu.classList.remove("slide-out");
        menu.classList.add("slide-in");
        console.log("menu opened.");
}
})