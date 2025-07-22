import template from "./posts.hbs";

export const renderPosts = () => {
    const context = {
        title: "Собаке Качалова",
        author: {
            id: 47,
            name: "Сергей Есенин"
        },
        people: [
            "Yehuda Katz",
            "Alan Johnson",
            "Charles Jolley",
        ],
    };

    document.body.insertAdjacentHTML(
        "afterbegin",
        template(context)
    )
}
