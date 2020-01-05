module.exports = {
    siteMetadata: {
        title: `Natours | Exciting tours for adventurous people`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Natours`,
                short_name: `Natours`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#55c57a`,
                display: `standalone`,
                icon: `src/img/favicon.png`,
            },
        },
    ],
}
