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
            author: {
                name: "John Doe",
                subscribers_count: 11
            }
        },
        {
            id: 2,
            title: "Title2",
            description: "Description2",
            author: {
                name: "Georgia Morrow",
                subscribers_count: 22
            }
        },
        {
            id: 3,
            title: "Title3",
            description: "Description3",
            author: {
                name: "Herbert Cruz",
                subscribers_count: 33
            }
        },
    ]
}

export default config;
