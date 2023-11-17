module.exports = {
    siteMetadata: {
        title: "DeArrow",
        description:
            "DeArrow is a browser extension for replacing titles and thumbnails on YouTube with community created accurate versions. No more clickbait.",
        author: "Ajay Ramachandran",
        icon: "https://dearrow.ajay.app/logo-1024.png",
        siteUrl: "https://dearrow.ajay.app"
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
                icon: "static/logo-1024.png",
            },
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-sitemap"
    ],
};
