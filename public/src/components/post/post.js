import Component from "../core/baseComponent.js";

export default class Post extends Component {
    constructor(parent, config) {
        super(parent, config, 'post');
    }

    get self() {
        return document.querySelector(`post-${this.config.id}`);
    }

    render() {
        this.parent.insertAdjacentHTML(
            "afterbegin",
            this.html
        )
    }
}
