let btnNav = document.querySelector(".btn-nav")
let nav = document.querySelector("nav")

btnNav.addEventListener("click", (e) => {
    nav.classList.toggle("nav")
})

window.addEventListener("DOMContentLoaded", (e) => {
    if (window.innerWidth >= 768 && nav.classList.contains("nav") == true) {
        nav.classList.remove("nav");
    } else if (window.innerWidth < 768) {
        nav.classList.add("nav")
    }
    
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768 && nav.classList.contains("nav") == true) {
            nav.classList.remove("nav");
        } else if (window.innerWidth < 768) {
            nav.classList.add("nav")
        }
    })
});

console.log(nav)
