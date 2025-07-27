const config = {
    header: {
        isAuth: false,
        title: "Handlebars demo",
        menu: [
            {
                id: 1,
                label: "Home",
                link: "/home"
            },
            {
                id: 2,
                label: "About",
                link: "/about"
            },
            {
                id: 3,
                label: "Settings",
                link: "/about"
            }
        ]
    },
    posts: [
        {
            id: 1,
            title: "Title1",
            description: "Description1",
        },
        {
            id: 2,
            title: "Title2",
            description: "Description2",
        },
        {
            id: 3,
            title: "Title3",
            description: "Description3",
        },
    ]
}

export default config;
