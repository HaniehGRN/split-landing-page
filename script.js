const panels = document.querySelectorAll(".panel");

panels[0].addEventListener("mouseover", () => {
    panels[0].classList.add("expandB");
    panels[1].classList.add("expandS");
    panels[1].classList.remove("expandB");
    panels[0].classList.remove("expandS");
})

panels[1].addEventListener("mouseover", () => {
    panels[1].classList.add("expandB");
    panels[0].classList.add("expandS");
    panels[0].classList.remove("expandB");
    panels[1].classList.remove("expandS");
})

