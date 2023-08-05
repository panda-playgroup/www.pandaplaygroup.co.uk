import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = (): Queries.SiteSiteMetadata => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);

    return data.site.siteMetadata;
};

export { useSiteMetadata };
