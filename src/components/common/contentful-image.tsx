import { GatsbyImage } from "gatsby-plugin-image";

interface ContentfulImageProps {
    imageTitle: string;
    images: Queries.Maybe<Queries.ContentfulAsset>[];
}

const ContentfulImage = ({ imageTitle, images }: ContentfulImageProps) => {
    const image: Queries.Maybe<Queries.ContentfulAsset> | undefined = images.find(
        (image: Queries.Maybe<Queries.ContentfulAsset>) => image?.title === imageTitle,
    );

    return (
        <>
            {image?.gatsbyImageData && (
                <GatsbyImage
                    role="img"
                    image={image.gatsbyImageData}
                    alt={image.description ?? ""}
                    className="rounded-lg"
                />
            )}
        </>
    );
};

export default ContentfulImage;
