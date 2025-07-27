import Component from "../core/baseComponent.js";
import Post from "../post/post.js";

export default class Posts extends Component{
    constructor(parent, config) {
        super(parent, config, 'posts');
    }

    self() {
        return document.querySelector(".posts-container");
    }

    render() {
        this.parent.insertAdjacentHTML(
            "afterbegin",
            this.template()
        )

        this.config.forEach(data => {
            const post = new Post(this.self(), data);
            post.render();
        })
    }
}
