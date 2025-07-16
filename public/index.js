import "./build/posts.js"; // Подключение скомпилированного в js шаблона posts.hbs

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
    window.Handlebars.templates["posts.hbs"](context)
)
