import Component from "../core/baseComponent.js";

export default class Header extends Component {
    constructor(parent, config) {
        super(parent, config, 'header');
    }

    render() {
        this.parent.insertAdjacentHTML(
            "afterbegin",
            this.html
        )
    }
}
