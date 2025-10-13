import { graphql, useStaticQuery } from "gatsby";

const useClimateActionPolicy = (): Queries.Maybe<Queries.ContentfulAsset> => {
    const data = useStaticQuery<Queries.Query>(graphql`
        {
            contentfulAsset(title: { eq: "Climate Action Policy" }) {
                publicUrl
            }
        }
    `);

    return data.contentfulAsset;
};

export { useClimateActionPolicy };
