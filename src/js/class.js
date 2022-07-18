
class SlideServices {

    /**
     * Constructeur de la class SlideServices
     * @param {*} direction est la direction du slide. 2 valeurs seulement sont possibles (r pour right et l pour left)
     * @param {*} element est l'élément parent qui contient les éléments à défiler
     */
    constructor(direction, element) {
        this.direction = direction
        this.element = element
        this.items = element.children
    }

    setOrientation(direction) { this.direction = direction }
    setElement(element) { this.element = element }

    getOrientation() { return this.direction }
    getElement() { return this.element }
    getItems() { return this.items }
}

export default { SlideServices }
