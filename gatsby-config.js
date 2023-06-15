module.exports = {
    siteMetadata: {
        title: "DeArrow",
        description:
            "DeArrow is a browser extension for replacing titles and thumbnails on YouTube with community created accurate versions. No more clickbait.",
        author: "Ajay Ramachandran",
        icon: "logo.svg",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "DeArrow",
                short_name: "DeArrow",
                start_url: "/",
                background_color: "#fff",
                theme_color: "#fff",
                icon: "static/logo.svg",
            },
        },
        "gatsby-plugin-sass",
    ],
};
