import Component from "../core/baseComponent.js";
import Post from "../post/post.js";

export default class Posts extends Component{
    constructor(parent, config) {
        super(parent, config, 'posts');
    }

    render() {
        this.parent.insertAdjacentHTML(
            "afterbegin",
            this.html
        )

        this.config.items.forEach(data => {
            const post = new Post(this.self, data);
            post.render();
        })
    }
}
