import Posts from "../../components/posts/posts.js";
import config from "../../shared/config.js";
import Header from "../../components/header/header.js";

export default class Home {
    #parent
    #self

    constructor(rootElement) {
        this.#parent = rootElement;
    }

    render() {
        this.#self = document.createElement("div");
        this.#self.id = "home-page";

        this.#parent.appendChild(this.#self)

        const posts = new Posts(this.#self, config.posts)
        posts.render()

        const header = new Header(this.#self, config.header)
        header.render()
    }
}
