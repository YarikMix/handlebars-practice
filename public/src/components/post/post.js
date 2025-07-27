import Component from "../core/baseComponent.js";

export default class Post extends Component {
    constructor(parent, config) {
        super(parent, config, 'post');
    }

    render() {
        this.parent.insertAdjacentHTML(
            "afterbegin",
            this.template(this.config)
        )
    }
}
