import { SlideServices } from "./class";

const element1 = document.querySelector(".slideLeft")
const element2 = document.querySelector(".slideRight")

const slideA = new SlideServices('l', element1)
const slideB = new SlideServices('r', element2)

window.alert(element1, element2)