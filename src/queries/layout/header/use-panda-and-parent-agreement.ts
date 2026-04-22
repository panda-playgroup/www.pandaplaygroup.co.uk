import { graphql, useStaticQuery } from "gatsby";

const usePandaAndParentAgreement = (): Queries.Maybe<Queries.ContentfulAsset> => {
    const data = useStaticQuery<Queries.Query>(graphql`
        {
            contentfulAsset(title: { eq: "Panda and Parent Agreement" }) {
                url
            }
        }
    `);

    return data.contentfulAsset;
};

export { usePandaAndParentAgreement };
